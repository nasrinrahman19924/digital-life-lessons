async function getLessons() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/lessons`,
    {
      cache: "no-store",
    },
  );

  return res.json();
}

export default async function PublicLessonsPage() {
  const lessons = await getLessons();

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">Public Lessons</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="border rounded-3xl p-6">
            <h2 className="text-2xl font-bold">{lesson.title}</h2>

            <p className="mt-4">{lesson.description}</p>

            <div className="mt-5 flex gap-3">
              <span>❤️ {lesson.likes}</span>

              <span>⭐ {lesson.favorites}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
