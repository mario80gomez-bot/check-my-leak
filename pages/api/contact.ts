import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // IMPORTANT: set these in Vercel environment variables
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || user;

    if (!user || !pass) {
      return res.status(500).json({ message: "Email environment variables not set" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to,
      replyTo: email,
      subject: `New message from ${name} (${email})`,
      text: message,
    });

    return res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
