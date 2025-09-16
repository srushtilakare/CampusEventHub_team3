// app/dashboard/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import dbConnect from "../../lib/mongoose";
import User from "../../models/User";

export default async function DashboardPage() {
  const token = cookies().get("token")?.value;
  const JWT_SECRET = process.env.JWT_SECRET || "";

  if (!token) {
    redirect("/auth/login");
  }

  let payload: any = null;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.log("Invalid token", err);
    redirect("/auth/login");
  }

  await dbConnect();
  const user = await User.findById(payload.id).lean();

  if (!user || !user.verified) {
    redirect("/auth/login");
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>

      <section style={{ marginTop: 20 }}>
        <h2>Your dashboard</h2>
        <p>Only visible to authenticated & verified users.</p>
        {/* Put your dashboard components here */}
      </section>
    </main>
  );
}
