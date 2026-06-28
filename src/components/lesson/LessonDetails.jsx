import Link from "next/link";

export default function LessonDetails({ lesson, user }) {

  // Premium Access Check
  if (lesson.visibility === "premium" && !user?.isPremium) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">
          Premium Lesson
        </h1>

        <p className="mt-4">
          Upgrade to Premium to access this lesson.
        </p>

        <Link
          href="/plans"
          className="mt-6 inline-block bg-violet-600 px-8 py-3 rounded-xl text-white"
        >
          Upgrade Now
        </Link>
      </div>
    );
  }

  // Premium user অথবা Free lesson হলে এটা দেখাবে
  return (
    <div className="space-y-6">
      <img
        src={lesson.image}
        className="w-full h-[450px] object-cover rounded-3xl"
      />

      <h1 className="text-5xl font-bold">{lesson.title}</h1>

      <div className="flex gap-4">
        <span className="bg-violet-100 px-4 py-2 rounded-full">
          {lesson.category}
        </span>

        <span className="bg-orange-100 px-4 py-2 rounded-full">
          {lesson.emotionalTone}
        </span>
      </div>

      <p className="text-lg leading-9 text-gray-600">
        {lesson.description}
      </p>
    </div>
  );
}