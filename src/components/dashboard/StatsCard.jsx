export default function StatsCard({ item }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow">
      <h3 className="text-gray-500">{item.title}</h3>

      <h2 className="text-4xl font-bold mt-4">{item.value}</h2>
    </div>
  );
}
