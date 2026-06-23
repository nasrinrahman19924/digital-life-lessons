export default function StatsCard({
  title,

  value,

  icon,
}) {
  return (
    <div className="bg-white rounded-3xl border p-6 shadow-sm hover:shadow-lg duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="text-4xl font-bold mt-3">{value}</h2>
        </div>

        <div className="text-5xl">{icon}</div>
      </div>
    </div>
  );
}
