const contributors = [1, 2, 3];

const TopContributors = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16">
          Top Contributors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {contributors.map((item) => (
            <div key={item} className="border rounded-3xl p-8 text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://i.pravatar.cc/150"
              />

              <h3 className="text-2xl font-bold mt-5">John Doe</h3>

              <p>15 Lessons Shared</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopContributors;
