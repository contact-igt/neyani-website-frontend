import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { requestId, name, phone, treatment, message, details, source } = body ?? {};
  if (
    typeof requestId !== "string" ||
    typeof name !== "string" || !name.trim() ||
    typeof phone !== "string" || !phone.trim()
  ) {
    return NextResponse.json({ error: "Name and phone number are required." }, { status: 400 });
  }

  const { NEYANI_LEADS_API_URL: endpoint } = process.env;
  const clientKey = process.env.NEYANI_CLIENT_KEY?.trim();
  if (!endpoint || !clientKey) {
    return NextResponse.json(
      { error: "Online appointments are temporarily unavailable. Please contact the hospital." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Client-Key": clientKey },
      body: JSON.stringify({ requestId, name, phone, treatment, message: message || details, source }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (response.status === 400) {
      return NextResponse.json({ error: "Check your name, phone number and appointment details." }, { status: 400 });
    }
    if (response.ok && (await response.json()).success === true) {
      return NextResponse.json({ success: true });
    }
  } catch {
    // A retry keeps the same request ID so an uncertain response cannot create another lead.
  }

  return NextResponse.json(
    { error: "We couldn't confirm your appointment request. Please try again." },
    { status: 502 },
  );
}
