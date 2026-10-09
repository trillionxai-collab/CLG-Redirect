import { NextResponse } from "next/server";

export function GET() {
  const destination = process.env.PRIVATE_REDIRECT_URL;

  if (!destination) {
    return new Response("Redirect is temporarily unavailable.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  let destinationUrl: URL;
  try {
    destinationUrl = new URL(destination);
  } catch {
    return new Response("Redirect is temporarily unavailable.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  if (destinationUrl.protocol !== "https:" || !destinationUrl.hostname || destinationUrl.username || destinationUrl.password) {
    return new Response("Redirect is temporarily unavailable.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  return NextResponse.redirect(destinationUrl, { status: 302 });
}