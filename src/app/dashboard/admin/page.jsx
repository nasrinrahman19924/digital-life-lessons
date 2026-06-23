export default function AdminPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border rounded-3xl p-8">
          <h3>Total Users</h3>

          <h2 className="text-5xl font-bold mt-4">150</h2>
        </div>

        <div className="border rounded-3xl p-8">
          <h3>Total Lessons</h3>

          <h2 className="text-5xl font-bold mt-4">350</h2>
        </div>

        <div className="border rounded-3xl p-8">
          <h3>Reports</h3>

          <h2 className="text-5xl font-bold mt-4">15</h2>
        </div>

        <div className="border rounded-3xl p-8">
          <h3>Premium Users</h3>

          <h2 className="text-5xl font-bold mt-4">20</h2>
        </div>
      </div>
    </div>
  );
}
