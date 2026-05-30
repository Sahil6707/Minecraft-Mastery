import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// --- SECURITY & SPAM PROTECTION: IN-MEMORY RATE LIMITER ---
interface RateLimitRecord {
  timestamps: number[];
}
const rateLimits = new Map<string, RateLimitRecord>();

// Simple, high-performance in-memory rate limiter helper
function checkRateLimit(req: Request, res: Response): boolean {
  const ip = (req.headers["x-forwarded-for"] as string) || req.socket?.remoteAddress || "global";
  const now = Date.now();
  const timeWindow = 10 * 60 * 1000; // 10 minutes window
  const maxRequests = 5; // Allow max 5 submissions per 10 minutes per IP

  const record = rateLimits.get(ip) || { timestamps: [] };
  // Clean old requests
  record.timestamps = record.timestamps.filter((t) => now - t < timeWindow);

  if (record.timestamps.length >= maxRequests) {
    res.status(429).json({
      success: false,
      message: "Too many requests. Please wait a few minutes before trying again to prevent spam.",
    });
    return false;
  }

  record.timestamps.push(now);
  rateLimits.set(ip, record);
  return true;
}

// --- STRICT PRODUCTION EMAIL DELIVERY HELPER (NO EMULATOR) ---
async function sendNotificationEmail(subject: string, bodyText: string) {
  const adminEmailsVar = process.env.ADMIN_EMAILS;
  if (!adminEmailsVar) {
    console.error("[SMTP Debug] Missing required environment variable: ADMIN_EMAILS");
    throw new Error("Missing required environment variable: ADMIN_EMAILS. Please configure it in your Vercel Dashboard.");
  }

  const recipientList = adminEmailsVar
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);

  if (recipientList.length === 0) {
    throw new Error("ADMIN_EMAILS is empty or invalid. Please provide at least one recipient email address.");
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  // Verify SMTP variables are defined
  const missingVars = [];
  if (!smtpHost) missingVars.push("SMTP_HOST");
  if (!smtpUser) missingVars.push("SMTP_USER");
  if (!smtpPass) missingVars.push("SMTP_PASS");

  if (missingVars.length > 0) {
    const errorMsg = `SMTP configuration is incomplete. Missing environment variables: ${missingVars.join(", ")}. Please configure them in your Vercel Dashboard.`;
    console.error(`[SMTP Debug] ${errorMsg}`);
    throw new Error(errorMsg);
  }

  console.log(`[Email System] Preparing to send notification to inboxes: ${recipientList.join(", ")}`);

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // True for port 465, false for others
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  } catch (transporterError: any) {
    console.error("[SMTP Debug] Failed to create transport instance:", transporterError);
    throw transporterError;
  }

  // SMTP connection and authentication startup check
  console.log("[SMTP Debug] Verifying SMTP credentials and connection...");
  try {
    await transporter.verify();
    console.log("[SMTP Debug] SMTP connection & authentication result: SUCCESS ✅");
  } catch (verifyError: any) {
    console.error("[SMTP Debug] SMTP connection & authentication result: FAILED ❌ (ROOT CAUSE)");
    console.error("[SMTP Debug] Verify Error Details:", verifyError);
    throw new Error(`SMTP authentication / connection failed: ${verifyError.message}`);
  }

  // Send the email
  console.log("[SMTP Debug] Dispatching email...");
  try {
    const info = await transporter.sendMail({
      from: `"Minecraft Mastery System" <${smtpUser}>`,
      to: recipientList.join(", "),
      subject: subject,
      text: bodyText,
    });

    console.log(`[SMTP Debug] Email delivery result: SUCCESS ✅ (MessageId: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (deliveryError: any) {
    console.error("[SMTP Debug] Email delivery result: FAILED ❌");
    console.error("[SMTP Debug] Delivery Error Details:", deliveryError);
    throw deliveryError;
  }
}

// --- SERVERLESS ENTRYPOINT HANDLER ---
export default async function handler(req: Request, res: Response) {
  // Always wrap entire serverless handler in a try-catch to ensure we NEVER crash and return plain text
  try {
    // Only allow POST requests for this form endpoint
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ 
        success: false, 
        message: `Method ${req.method} Not Allowed. Only POST requests are permitted.` 
      });
    }

    // Apply rate limiter helper
    const allowed = checkRateLimit(req, res);
    if (!allowed) return; // Rate limiter already responds with 429 JSON

    // Expect and validate projectDescription consistent with the frontend (Requirement 2, 7)
    const { company, email, budget, projectDescription, fax_number } = req.body;
    const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket?.remoteAddress || "Unknown";

    // Honey Pot Check (Spam protection)
    if (fax_number) {
      console.warn(`[Spam Guard] Silently filtered partnership spam bot from ${clientIp}`);
      return res.status(200).json({ 
        success: true, 
        message: "Business inquiry submitted successfully. We will respond as soon as possible." 
      });
    }

    // --- SERVER-SIDE FORM VALIDATION ---
    if (!company || typeof company !== "string" || company.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Company or network name is required." 
      });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "A valid email address is required." 
      });
    }
    if (!projectDescription || typeof projectDescription !== "string" || projectDescription.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Project description is required." 
      });
    }

    const budgetStr = budget && typeof budget === "string" ? budget.trim() : "Not Specified";
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " (UTC)";

    // Format body text
    const emailBody = `Company:
${company.trim()}

Email:
${email.trim()}

Budget:
${budgetStr}

Project Description:
${projectDescription.trim()}

Submission Time:
${timestamp}

IP Address:
${clientIp}`;

    const emailSubject = `[Minecraft Mastery Business Inquiry]`;

    // Strict email send process (displays success ONLY on real success)
    try {
      await sendNotificationEmail(emailSubject, emailBody);
      return res.status(200).json({
        success: true,
        message: "Business inquiry submitted successfully. We will respond as soon as possible.",
      });
    } catch (emailError: any) {
      console.error("Email error:", emailError);
      return res.status(500).json({
        success: false,
        message: `${emailError.message || "Unknown SMTP error"}`
      });
    }

  } catch (globalError: any) {
    console.error("Global Serverless Function error:", globalError);
    return res.status(500).json({
      success: false,
      message: `A server error occurred: ${globalError.message || "Unknown internal error"}`
    });
  }
}
