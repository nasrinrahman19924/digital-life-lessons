const LessonDetailsPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-5">
      <img
        className="w-full h-[500px] object-cover rounded-3xl"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
      />

      <h1 className="text-5xl font-bold my-10">Lesson Title</h1>

      <p>Full lesson description here...</p>

      <div className="flex gap-5 mt-10">
        <button>❤️ Like</button>

        <button>🔖 Favorite</button>

        <button>🚩 Report</button>
      </div>
    </div>
  );
};

export default LessonDetailsPage;
