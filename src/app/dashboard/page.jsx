import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold">Dashboard Overview</h1>

        <p className="text-gray-500 mt-2">Manage your life lessons</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Lessons" value="15" icon="📚" />

        <StatsCard title="Favorites" value="8" icon="🔖" />

        <StatsCard title="Premium" value="⭐" icon="👑" />

        <StatsCard title="Weekly Growth" value="+12%" icon="📈" />
      </div>

      <div className="bg-white p-8 rounded-3xl border">
        <h2 className="text-3xl font-bold mb-6">Recent Lessons</h2>

        <div className="space-y-4">
          <div className="border p-4 rounded-xl">Never Compare Yourself</div>

          <div className="border p-4 rounded-xl">Failure Is A Teacher</div>

          <div className="border p-4 rounded-xl">Protect Your Peace</div>
        </div>
      </div>
    </div>
  );
}
