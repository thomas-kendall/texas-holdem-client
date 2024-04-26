import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export const revalidate = 0;

export async function GET(req: NextRequest) {
  const url = process.env.API_URL + "/users/me";
  const token = await getToken({ req });
  if (token?.access_token) {
    const headers: HeadersInit = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Bearer ${token.access_token}`);

    const requestInit: RequestInit = {
      method: "GET",
      headers: headers,
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
