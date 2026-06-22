const lessons = [1, 2, 3, 4];

const FeaturedLessons = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Lessons
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lessons.map((item) => (
            <div key={item} className="border rounded-3xl p-6 shadow">
              <img
                className="h-48 w-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              />

              <h3 className="text-2xl font-bold mt-5">
                How Failure Changed My Life
              </h3>

              <p className="my-3">Personal Growth</p>

              <button className="bg-violet-600 text-white px-5 py-2 rounded-xl">
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLessons;
