"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Home, Plus, BookOpen, Heart, User, CreditCard } from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();

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
              className={`

flex items-center

gap-3

p-4

rounded-xl

transition

${active ? "bg-violet-600" : "hover:bg-slate-800"}

`}
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
