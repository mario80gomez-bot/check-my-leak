// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const ct = req.headers.get("content-type") || "";
    let name = "", email = "", phone = "", message = "";

    if (ct.includes("multipart/form-data") || ct.includes("application/x-www-form-urlencoded")) {
      const form = await req.formData();
      name = String(form.get("name") || "");
      email = String(form.get("email") || "");
      phone = String(form.get("phone") || "");
      message = String(form.get("message") || "");
    } else {
      const body = await req.json();
      name = body?.name ?? "";
      email = body?.email ?? "";
      phone = body?.phone ?? "";
      message = body?.message ?? "";
    }

    if (!name || !email || !phone) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,             // e.g. "smtp.zoho.com"
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465
      auth: {
        user: process.env.SMTP_USER,          // full email address
        pass: process.env.SMTP_PASS,          // app-password if using Gmail/Zoho
      },
    });

    const to = process.env.CONTACT_TO || process.env.SMTP_USER!;
    await transporter.sendMail({
      from: `"Semper Lift & Load" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New Quote Request — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT_ROUTE_ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
