// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" }, { status: 200 });
  res.cookies.set({
    name: "token",
    value: "",
    path: "/",
    httpOnly: true,
    maxAge: 0,
  });
  return res;
}
