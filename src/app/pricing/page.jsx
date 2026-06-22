const PricingPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-5">
      <h1 className="text-5xl font-bold text-center mb-16">
        Upgrade To Premium
      </h1>

      <div className="border rounded-3xl p-10">
        <h2 className="text-4xl font-bold">Lifetime Premium ⭐</h2>

        <h3 className="text-6xl font-bold my-8">৳1500</h3>

        <ul className="space-y-5">
          <li>Unlimited Lessons</li>

          <li>Premium Content Access</li>

          <li>Verified Badge</li>

          <li>Priority Listing</li>

          <li>Premium Lesson Creation</li>

          <li>Ad Free Experience</li>
        </ul>

        <button className="mt-10 bg-violet-600 text-white px-8 py-4 rounded-xl">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
