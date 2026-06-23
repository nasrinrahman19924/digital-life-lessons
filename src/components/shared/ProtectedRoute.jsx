"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useSession } from "@/lib/auth-client";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  const { data, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !data?.user) {
      router.push("/auth/signin");
    }
  }, [data, isPending, router]);

  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!data?.user) return null;

  return children;
}
