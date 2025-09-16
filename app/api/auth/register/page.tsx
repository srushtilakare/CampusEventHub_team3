// app/auth/register/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed");
      } else {
        // cookie is set by server — navigate to dashboard
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 520, margin: "2rem auto", padding: 20 }}>
      <h1>Create account</h1>
      <form onSubmit={submit}>
        <div style={{ marginBottom: 8 }}>
          <label>Name</label>
          <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Password</label>
          <input required type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
        </div>
        <button type="submit" disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
