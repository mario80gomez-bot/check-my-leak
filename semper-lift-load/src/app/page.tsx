"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send");
      setResult({ ok: true, msg: "Thanks! We received your request." });
      form.reset();
    } catch (err: any) {
      setResult({ ok: false, msg: "Error sending message" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-[#0e2a1c] to-[#0a3a24] text-white py-10 flex flex-col items-center text-center hero">
        <Image
          src="/semper-shield.png"
          alt="Semper Lift & Load Logo"
          width={160}
          height={160}
          className="drop-shadow-lg mb-2"
          priority
        />
        <h1 className="text-3xl font-bold hero-title-force">Semper Lift & Load</h1>
        <p className="text-sm hero-sub-force mt-1">
          Veteran-Owned Junk Removal • Serving Bergen County, NJ
        </p>
      </section>

      {/* CONTENT SECTION */}
      <section className="flex-grow flex flex-col items-center justify-start py-10 px-4">
        <div className="max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Fast, Reliable, Respectful Service
          </h2>
          <p className="text-gray-700 text-sm mb-6">
            From single couches to full cleanouts, we serve residential clients,
            property managers, contractors, and businesses. Same-day service available.
          </p>

          {/* CONTACT FORM */}
          <form
            onSubmit={onSubmit}
            className="form-card p-6 w-full space-y-3 bg-[#f9faf9] border border-[#0e2a1c]/60 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Request a Free Quote
            </h3>

            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d97b00]"
            />
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d97b00]"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Your phone number"
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#d97b00]"
            />
            <textarea
              name="message"
              placeholder="What do you need removed?"
              required
              className="w-full border border-gray-300 p-2 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#d97b00]"
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2 rounded bg-[#f28c00] text-white font-semibold hover:bg-[#ff9900] transition"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>

            {result && (
              <p
                className={`text-sm mt-1 ${
                  result.ok ? "text-green-600" : "text-red-500"
                }`}
              >
                {result.msg}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-500 py-6">
        © 2025 Semper Lift & Load · Veteran Owned & Operated
        <div>
          Need a quick quote?{" "}
          <a
            href="#quote"
            className="text-[#0e2a1c] font-semibold underline hover:text-[#f28c00]"
          >
            Request Now
          </a>
        </div>
      </footer>
    </main>
  );
}
