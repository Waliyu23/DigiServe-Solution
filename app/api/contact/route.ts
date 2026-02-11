import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { site } from "@/lib/site";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatContactHtml(input: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  message: string;
}) {
  const rows = [
    ["Name", escapeHtml(input.name)],
    ["Email", escapeHtml(input.email)],
    ["Phone", escapeHtml(input.phone || "-")],
    ["Company", escapeHtml(input.company || "-")],
    ["Service Type", escapeHtml(input.serviceType || "-")],
  ];

  const table = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:600;">${label}</td><td style="padding:8px 12px;border:1px solid #ddd;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
      <h2>New Contact Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${table}</table>
      <h3 style="margin-top:20px;">Message</h3>
      <p style="white-space:pre-wrap;">${escapeHtml(input.message)}</p>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Invalid input.";
      return NextResponse.json({ ok: false, message: first }, { status: 400 });
    }

    const { name, email, phone, company, serviceType, website, message } =
      parsed.data;

    // Honeypot: bots often fill hidden fields. Return success to avoid retries.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Email service is not configured. Please set RESEND_API_KEY on the server.",
        },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "DigiServe Contact <onboarding@resend.dev>";

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `New contact request: ${name}`,
        reply_to: email,
        html: formatContactHtml({
          name,
          email,
          phone,
          company,
          serviceType,
          message,
        }),
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return NextResponse.json(
        { ok: false, message: `Email send failed: ${errorText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
