import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export const revalidate = 0;

export async function POST(req: NextRequest) {
  const url = process.env.API_URL + "/users/sign-up";
  const token = await getToken({ req });
  if (token?.access_token) {
    const headers: HeadersInit = new Headers();
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Bearer ${token.access_token}`);

    const body = await req.json();
    const requestInit: RequestInit = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };

    const apiResponse = await fetch(url, requestInit);
    if (!apiResponse.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await apiResponse.json();

    return Response.json(data);
  } else {
    // No token
    return new Response(null, { status: 401, statusText: "Unauthorized" });
  }
}
