const MostSavedLessons = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16">
          Most Saved Lessons
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold">Never Give Up</h3>

              <p className="my-3">Saved by 520 people</p>

              <button className="bg-violet-600 text-white px-5 py-2 rounded-xl">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSavedLessons;
