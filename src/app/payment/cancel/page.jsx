"use client";

import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950 text-white">
      <div className="text-center">
        <div className="text-7xl">❌</div>

        <h1 className="text-5xl font-bold mt-5">Payment Cancelled</h1>

        <p className="mt-5 text-zinc-400">Your payment was cancelled.</p>

        <Link
          href="/pricing"
          className="inline-block mt-8 bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-xl"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
