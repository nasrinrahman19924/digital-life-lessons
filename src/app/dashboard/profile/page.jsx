"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data, isPending } = useSession();

  const user = data?.user;

  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`/api/users?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setDbUser(data));
    }
  }, [user]);

  if (isPending || !dbUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="border rounded-3xl p-10 shadow-sm">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={dbUser.image || user?.image}
            alt={dbUser.name}
            className="h-40 w-40 rounded-full object-cover border"
          />

          <div>
            <h1 className="text-5xl font-bold">{dbUser.name || user?.name}</h1>

            <p className="mt-3 text-gray-500">{dbUser.email}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full">
                {dbUser.totalLessons || 0} Lessons
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                {dbUser.totalFavorites || 0} Favorites
              </span>

              {dbUser.isPremium ? (
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                  ⭐ Premium Member
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                  Free Plan
                </span>
              )}
            </div>

            <div className="mt-8">
              <p>
                <strong>Role:</strong>{" "}
                <span className="capitalize">{dbUser.role || "user"}</span>
              </p>

              <p className="mt-2">
                <strong>Plan:</strong>{" "}
                {dbUser.isPremium ? "Lifetime Premium" : "Free"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
