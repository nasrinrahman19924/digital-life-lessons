import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Lessons",
      value: 12,
    },
    {
      title: "Favorites",
      value: 8,
    },
    {
      title: "Premium Status",
      value: "Free",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard Overview</h1>

        <p className="text-gray-500">Manage your life lessons.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <StatsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
