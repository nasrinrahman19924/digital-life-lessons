import Link from "next/link";

export default function MyFavoritesPage() {
  const favorites = [
    {
      id: 1,

      title: "Protect Your Peace",

      category: "Mindset",

      emotionalTone: "Motivational",
    },

    {
      id: 2,

      title: "Failure Is A Teacher",

      category: "Career",

      emotionalTone: "Realization",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">My Favorites</h1>

      <div className="overflow-x-auto border rounded-3xl">
        <table className="w-full">
          <thead>
            <tr className="h-16 border-b">
              <th>Lesson</th>

              <th>Category</th>

              <th>Tone</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {favorites.map((item) => (
              <tr key={item.id} className="h-20 border-b">
                <td>{item.title}</td>

                <td>{item.category}</td>

                <td>{item.emotionalTone}</td>

                <td>
                  <div className="flex justify-center gap-3">
                    <Link
                      href={`/lesson/${item.id}`}
                      className="bg-violet-600 text-white px-4 py-2 rounded-xl"
                    >
                      Details
                    </Link>

                    <button className="bg-red-500 text-white px-4 py-2 rounded-xl">
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
