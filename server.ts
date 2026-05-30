import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON body parsing with a safe payload limit
app.use(express.json({ limit: "50kb" }));

// --- SECURITY & SPAM PROTECTION: IN-MEMORY RATE LIMITER ---
interface RateLimitRecord {
  timestamps: number[];
}
const rateLimits = new Map<string, RateLimitRecord>();

// Simple, high-performance in-memory rate limiter middleware
const checkRateLimit = (req: Request, res: Response, next: () => void) => {
  const ip = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "global";
  const now = Date.now();
  const timeWindow = 10 * 60 * 1000; // 10 minutes window
  const maxRequests = 5; // Allow max 5 submissions per 10 minutes per IP

  const record = rateLimits.get(ip) || { timestamps: [] };
  // Clean old requests
  record.timestamps = record.timestamps.filter((t) => now - t < timeWindow);

  if (record.timestamps.length >= maxRequests) {
    res.status(429).json({
      error: "Too many requests. Please wait a few minutes before trying again to prevent spam.",
    });
    return;
  }

  record.timestamps.push(now);
  rateLimits.set(ip, record);
  next();
};

// --- EMAIL DELIVERY HELPER ---
async function sendNotificationEmail(subject: string, bodyText: string) {
  const adminEmailsVar = process.env.ADMIN_EMAILS || "sahilkoslia2220@gmail.com";
  // Support multiple admins/support teams by splitting comma-separated list
  const recipientList = adminEmailsVar
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);

  if (recipientList.length === 0) {
    recipientList.push("sahilkoslia2220@gmail.com");
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  console.log(`[Email System] Preparing to send notification to inboxes: ${recipientList.join(", ")}`);

  // Check if SMTP configuration is fully defined
  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // True for port 465, false for others
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"Minecraft Mastery System" <${smtpUser}>`,
        to: recipientList.join(", "),
        subject: subject,
        text: bodyText,
      });

      console.log(`[Email System] Email dispatched successfully: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (err: any) {
      console.error("[Email System] SMTP delivery failed:", err.message);
      throw err; // propagates to the route handler to give friendly error
    }
  } else {
    // Elegant fallback: Logs beautifully in the terminal server-side
    // This allows seamless local development testing and alerts them on how to configure secrets
    console.log(`\n======================================================`);
    console.log(`📡 [EMAIL EMULATOR FALLBACK - SMTP NOT CONFIGURED]`);
    console.log(`To enable live production email shipping, configure these environment variables:`);
    console.log(`- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAILS`);
    console.log(`------------------------------------------------------`);
    console.log(`Recipients : ${recipientList.join(", ")}`);
    console.log(`Subject    : ${subject}`);
    console.log(`Body       :\n${bodyText}`);
    console.log(`======================================================\n`);
    
    // Simulate a network dispatch delay to mock realistic server interaction
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, emulated: true };
  }
}

// --- API ENDPOINTS ---

// 1. Contact / Bug Report Endpoint
// Fields: Name, Email Address, Subject, Message
app.post("/api/contact", checkRateLimit, async (req: Request, res: Response) => {
  const { name, email, subject, message, website_url } = req.body;
  const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "Unknown";

  // Honey Pot Check (Spam protection)
  // If the hidden website_url field is filled, we silently block/finish the bot
  if (website_url) {
    console.warn(`[Spam Guard] Silently filtered spam bot request from ${clientIp}`);
    res.status(200).json({ success: true, message: "Message sent successfully. We will review your submission shortly." });
    return;
  }

  // --- SERVER-SIDE FORM VALIDATION ---
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    res.status(400).json({ error: "Name is required." });
    return;
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Please enter a valid email address." });
    return;
  }
  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    res.status(400).json({ error: "Subject is required." });
    return;
  }
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    res.status(400).json({ error: "Message is required." });
    return;
  }

  const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " (UTC)";
  
  // Format body text EXACTLY as requested by the user
  const emailBody = `Name: ${name.trim()}

Email: ${email.trim()}

Subject: ${subject.trim()}

Message:
${message.trim()}

Submission Time:
${timestamp}

IP Address:
${clientIp}`;

  try {
    const emailSubject = `[Minecraft Mastery Contact] ${subject.trim()}`;
    await sendNotificationEmail(emailSubject, emailBody);
    res.status(200).json({
      success: true,
      message: "Message sent successfully. We will review your submission shortly.",
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
});

// 2. Business / Partnership Inquiry Endpoint
// Fields: Company / Network Name, Contact Email, Budget, Project Description
app.post("/api/partnership", checkRateLimit, async (req: Request, res: Response) => {
  const { company, email, budget, projectDescription, fax_number } = req.body;
  const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "Unknown";

  // Honey Pot Check (Spam protection)
  if (fax_number) {
    console.warn(`[Spam Guard] Silently filtered partnership spam bot from ${clientIp}`);
    res.status(200).json({ success: true, message: "Business inquiry submitted successfully. We will respond as soon as possible." });
    return;
  }

  // --- SERVER-SIDE FORM VALIDATION ---
  if (!company || typeof company !== "string" || company.trim().length === 0) {
    res.status(400).json({ error: "Company or network name is required." });
    return;
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "A valid email address is required." });
    return;
  }
  if (!projectDescription || typeof projectDescription !== "string" || projectDescription.trim().length === 0) {
    res.status(400).json({ error: "Project description is required." });
    return;
  }

  const budgetStr = budget && typeof budget === "string" ? budget.trim() : "Not Specified";
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "UTC" }) + " (UTC)";

  // Format body text EXACTLY as requested by user
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

  try {
    const emailSubject = `[Minecraft Mastery Business Inquiry]`;
    await sendNotificationEmail(emailSubject, emailBody);
    res.status(200).json({
      success: true,
      message: "Business inquiry submitted successfully. We will respond as soon as possible.",
    });
  } catch (error: any) {
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
});

// --- VITE & STATIC FILES REGISTRATION ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Serve HTML page
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Custom Fullstack System running on http://localhost:${PORT}`);
  });
}

// Boot server
startServer().catch((e) => {
  console.error("[Server] Boot error:", e);
});
