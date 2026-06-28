"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";

export default function AdminProfile() {
  const { data } = useSession();

  const user = data?.user;

  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`/api/users?email=${user.email}`)
        .then((res) => res.json())

        .then((data) => setDbUser(data));
    }
  }, [user]);

  if (!dbUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-xl">
      <div className="border rounded-3xl p-10">
        <img src={dbUser.image} className="w-32 h-32 rounded-full" />

        <h1 className="text-4xl font-bold mt-5">{dbUser.name}</h1>

        <p>{dbUser.email}</p>

        <div className="mt-5">
          <span className="bg-red-100 px-4 py-2 rounded-full">Admin</span>
        </div>
      </div>
    </div>
  );
}
