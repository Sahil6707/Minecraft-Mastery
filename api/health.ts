import type { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
  // Return standard JSON response for deployment health verification
  res.status(200).json({ status: "ok" });
}
