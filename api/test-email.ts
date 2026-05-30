import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req: Request, res: Response) {
  // Always wrap in a try-catch to guarantee we always return valid JSON
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    console.log("[Test Email Debug] Initiating SMTP diagnostics endpoint...");
    console.log(`[Test Email Debug] Env Status:`);
    console.log(`- SMTP_HOST: ${smtpHost ? `DEFINED ("${smtpHost}")` : "UNDEFINED ❌"}`);
    console.log(`- SMTP_PORT: ${smtpPort} (${process.env.SMTP_PORT ? "DEFINED" : "DEFAULT"})`);
    console.log(`- SMTP_USER: ${smtpUser ? `DEFINED ("${smtpUser}")` : "UNDEFINED ❌"}`);
    console.log(`- SMTP_PASS: ${smtpPass ? `DEFINED (length: ${smtpPass.length})` : "UNDEFINED ❌"}`);

    if (!smtpHost || !smtpUser || !smtpPass) {
      const missing = [];
      if (!smtpHost) missing.push("SMTP_HOST");
      if (!smtpUser) missing.push("SMTP_USER");
      if (!smtpPass) missing.push("SMTP_PASS");

      console.error("[Test Email Debug] SMTP configuration missing variables:", missing.join(", "));
      return res.status(400).json({
        success: false,
        smtp: "unconfigured",
        authentication: "unconfigured",
        error: `Missing environment variables: ${missing.join(", ")}. Please configure them in your Vercel Dashboard.`
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // True for port 465, false for others
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    console.log("[Test Email Debug] Testing SMTP connection & authentication...");
    try {
      await transporter.verify();
      console.log("[Test Email Debug] SMTP verification: SUCCESS ✅");
      return res.status(200).json({
        smtp: "connected",
        authentication: "success"
      });
    } catch (verifyError: any) {
      console.error("[Test Email Debug] SMTP verification failed (ROOT CAUSE):", verifyError);
      return res.status(500).json({
        smtp: "failed",
        authentication: "failed",
        error: verifyError.message || "Connection failed",
        code: verifyError.code || "UNKNOWN_ERROR",
        command: verifyError.command || "N/A"
      });
    }
  } catch (globalError: any) {
    console.error("[Test Email Debug] Global exception in test endpoint:", globalError);
    return res.status(500).json({
      smtp: "failed",
      authentication: "failed",
      error: globalError.message || "Global diagnostic server error occurred"
    });
  }
}
