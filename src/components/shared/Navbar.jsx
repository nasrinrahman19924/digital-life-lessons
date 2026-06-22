"use client";

import Link from "next/link";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

import { useSession, signOut } from "@/lib/auth-client";

const Navbar = () => {
  const { data, isPending } = useSession();

  const user = data?.user;

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-5 h-20 flex justify-between items-center">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-violet-600 text-white flex justify-center items-center">
            🧠
          </div>

          <div>
            <h2 className="font-bold text-xl">Digital Life Lessons</h2>

            <p className="text-xs text-gray-500">Preserve your wisdom</p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-8">
          <Link href="/">Home</Link>

          <Link href="/public-lessons">Public Lessons</Link>

          {user && (
            <>
              <Link href="/dashboard/add-lesson">Add Lesson</Link>

              <Link href="/dashboard/my-lessons">My Lessons</Link>
            </>
          )}

          {user && !user?.isPremium && <Link href="/pricing">Pricing</Link>}

          {user?.isPremium && (
            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              Premium ⭐
            </div>
          )}
        </div>

        {/* Right Side */}

        <div>
          {isPending ? (
            <p>Loading...</p>
          ) : !user ? (
            <div className="flex  gap-3">
              <Link href="/auth/signin">
                <Button variant="light">Login</Button>
              </Link>

              <Link href="/auth/signup">
                <Button color="primary">Signup</Button>
              </Link>
            </div>
          ) : (
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  src={user.image}
                  name={user.name}
                  className="cursor-pointer"
                />
              </DropdownTrigger>

              <DropdownMenu>
                <DropdownItem key="name">{user.name}</DropdownItem>

                <DropdownItem key="profile">
                  <Link href="/dashboard/profile">Profile</Link>
                </DropdownItem>

                <DropdownItem key="dashboard">
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownItem>

                <DropdownItem
                  key="logout"
                  variant="danger"
                  onPress={handleLogout}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
