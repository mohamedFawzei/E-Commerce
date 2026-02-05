import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

async function handler(
  req: NextRequest,
  props: { params: Promise<{ path: string[] }> },
) {
  const params = await props.params;

  if (!API_URL) {
    return NextResponse.json(
      { error: "Server misconfiguration: API_URL not defined" },
      { status: 500 },
    );
  }

  const path = params.path.join("/");

  const searchParams = req.nextUrl.searchParams.toString();
  const targetUrl = `${API_URL}/${path}${searchParams ? `?${searchParams}` : ""}`;

  const headers = new Headers();
  const allowedHeaders = ["content-type", "authorization"];
  req.headers.forEach((value, key) => {
    if (allowedHeaders.includes(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
      body: ["GET", "HEAD"].includes(req.method) ? undefined : req.body,
      duplex: "half",
    } as RequestInit);

    const body = await response.arrayBuffer();

    const responseHeaders = new Headers();
    if (response.headers.has("content-type")) {
      responseHeaders.set(
        "content-type",
        response.headers.get("content-type")!,
      );
    }

    return new NextResponse(body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Proxy Error Details:", error);
    console.error("Failed Target URL:", targetUrl);
    return NextResponse.json(
      {
        error: "Failed to proxy request",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
