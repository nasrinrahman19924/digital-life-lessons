"use client";

import Link from "next/link";

export default function LessonCard({ lesson }) {
  return (
    <div className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl duration-300">
      <img src={lesson.image} className="h-56 w-full object-cover" />

      <div className="p-6 space-y-3">
        <div className="flex justify-between">
          <span className="bg-violet-100 px-3 py-1 rounded-full text-sm">
            {lesson.category}
          </span>

          <span className="bg-amber-100 px-3 py-1 rounded-full text-sm">
            {lesson.accessLevel}
          </span>
        </div>

        <h2 className="text-2xl font-bold">{lesson.title}</h2>

        <p className="text-gray-500">{lesson.description.slice(0, 100)}</p>

        <Link
          href={`/lesson/${lesson._id}`}
          className="bg-violet-600 inline-block text-white px-5 py-2 rounded-xl"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}
