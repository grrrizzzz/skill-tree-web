import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped → silently succeed.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Resend integration. If RESEND_API_KEY is not configured we log the
  // message to the server console and return success — useful for local
  // development before secrets are wired up.
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL ?? "hello@skilltreeai.com";
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL ?? "Skill Tree Contact <onboarding@resend.dev>";

  const subject = `New inquiry from ${data.name} — ${labelForService(data.service)}`;
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.company ? `Company: ${data.company}` : null,
    `Service: ${labelForService(data.service)}`,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    console.info(
      "[contact] RESEND_API_KEY not set — would have sent:\n" +
        `Subject: ${subject}\n${text}`,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: data.email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Resend request failed:", err);
    return NextResponse.json(
      { error: "Could not send message. Please try again later." },
      { status: 502 },
    );
  }
}

function labelForService(value: string): string {
  switch (value) {
    case "agents":
      return "Specialized AI Agents";
    case "consulting":
      return "AI Consulting";
    case "custom":
      return "Custom AI Development";
    case "training":
      return "AI Training & Workshops";
    default:
      return "Not sure yet";
  }
}
