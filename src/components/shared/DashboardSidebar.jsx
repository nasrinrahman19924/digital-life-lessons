"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useSession } from "@/lib/auth-client";

import { Home, Plus, BookOpen, Heart, User, CreditCard } from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();
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

  const role = dbUser?.role || "user";

  const menus = [
    {
      name: "Dashboard",

      href: "/dashboard",

      icon: Home,
    },

    {
      name: "Add Lesson",

      href: "/dashboard/add-lesson",

      icon: Plus,
    },

    {
      name: "My Lessons",

      href: "/dashboard/my-lessons",

      icon: BookOpen,
    },

    {
      name: "Favorites",

      href: "/dashboard/my-favorites",

      icon: Heart,
    },

    {
      name: "Profile",

      href: "/dashboard/profile",

      icon: User,
    },

    {
      name: "Upgrade",

      href: "/pricing",

      icon: CreditCard,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-10">🧠 Dashboard</h2>

      <div className="space-y-3">
        {menus.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-4 rounded-xl transition ${active ? "bg-violet-600" : "hover:bg-slate-800"}`}
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}
      </div>
      {role === "admin" && (
        <div className="mt-10 border-t pt-6 space-y-3">
          <Link href="/dashboard/admin" className="block hover:text-violet-300">
            Admin Dashboard
          </Link>

          <Link
            href="/dashboard/admin/manage-users"
            className="block hover:text-violet-300"
          >
            Manage Users
          </Link>

          <Link
            href="/dashboard/admin/manage-lessons"
            className="block hover:text-violet-300"
          >
            Manage Lessons
          </Link>

          <Link
            href="/dashboard/admin/reported-lessons"
            className="block hover:text-violet-300"
          >
            Reported Lessons
          </Link>

          <Link
            href="/dashboard/admin/profile"
            className="block hover:text-violet-300"
          >
            Admin Profile
          </Link>
        </div>
      )}
    </aside>
  );
}
