export default function ProfilePage() {
  const user = {
    name: "Shahin",

    email: "shahin@gmail.com",

    image: "https://i.pravatar.cc/300",

    isPremium: true,
  };

  return (
    <div className="space-y-10">
      <div className="border rounded-3xl p-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img src={user.image} className="h-40 w-40 rounded-full" />

          <div>
            <h1 className="text-5xl font-bold">{user.name}</h1>

            <p className="mt-3">{user.email}</p>

            <div className="flex gap-3 mt-6">
              <span className="bg-violet-100 px-4 py-2 rounded-full">
                15 Lessons
              </span>

              <span className="bg-green-100 px-4 py-2 rounded-full">
                8 Favorites
              </span>

              {user.isPremium && (
                <span className="bg-yellow-100 px-4 py-2 rounded-full">
                  Premium ⭐
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
