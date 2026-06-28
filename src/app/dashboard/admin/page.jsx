import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <Link
        href="/dashboard/admin/users"
        className="border rounded-2xl p-8 hover:bg-gray-50"
      >
        <h2 className="text-2xl font-bold">Manage Users</h2>
      </Link>

      <Link
        href="/dashboard/admin/lessons"
        className="border rounded-2xl p-8 hover:bg-gray-50"
      >
        <h2 className="text-2xl font-bold">Manage Lessons</h2>
      </Link>

      <Link
        href="/dashboard/admin/reports"
        className="border rounded-2xl p-8 hover:bg-gray-50"
      >
        <h2 className="text-2xl font-bold">Reported Lessons</h2>
      </Link>

      <Link
        href="/dashboard/admin/profile"
        className="border rounded-2xl p-8 hover:bg-gray-50"
      >
        <h2 className="text-2xl font-bold">Admin Profile</h2>
      </Link>

    </div>
  );
}