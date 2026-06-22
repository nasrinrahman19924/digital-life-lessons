"use client";

import Link from "next/link";

import { Home, Plus, BookOpen, Heart, User, CreditCard } from "lucide-react";

export default function DashboardSidebar() {
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
    <aside className="w-72 min-h-screen border-r bg-white p-6">
      <div className="mb-12">
        <h2 className="font-bold text-2xl">🧠 Dashboard</h2>
      </div>

      <div className="space-y-3 mt-6">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center mt-10 gap-3 p-4 rounded-xl hover:bg-violet-100 transition"
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
