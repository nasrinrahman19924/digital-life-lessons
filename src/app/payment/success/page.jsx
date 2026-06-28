"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const refresh = async () => {
      await authClient.getSession();

      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
    };

    refresh();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950 text-white">
      <div className="text-center">
        <div className="text-7xl">🎉</div>

        <h1 className="text-5xl font-bold mt-5">Payment Successful</h1>

        <p className="mt-5 text-zinc-400">
          Congratulations! Your account is now Premium.
        </p>

        <p className="mt-2 text-zinc-500">Redirecting to dashboard...</p>
      </div>
    </div>
  );
}
