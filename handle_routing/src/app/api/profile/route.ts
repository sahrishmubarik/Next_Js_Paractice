import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headersList = await headers();

  console.log(headersList.get("Authorization"));

  return new Response(
    "<h1>Profile Api Data got you!</h1>",
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Custom-Header": "Profile-API",
      },
    }
  );
}