const MyFavorites = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">My Favorites</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-3xl p-6">
            <h3>Favorite Lesson</h3>

            <button>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
