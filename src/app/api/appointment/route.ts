import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, treatment, message, details, source } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not configured.");
      // In development or when webhook isn't configured yet, log the submission
      console.log("Appointment Form Submission Received:", {
        name,
        phone,
        treatment: treatment || details,
        message: message || details || "",
        source: source || "Website",
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          warning: "Webhook URL not set in environment variables. Logged to console.",
        },
        { status: 200 }
      );
    }

    const payload = {
      timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }),
      name: String(name).trim(),
      phone: String(phone).trim(),
      treatment: String(treatment || details || "General Consultation").trim(),
      message: String(message || details || "").trim(),
      source: String(source || "Website").trim(),
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with HTTP ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error submitting to Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to record appointment request. Please try again." },
      { status: 500 }
    );
  }
}

