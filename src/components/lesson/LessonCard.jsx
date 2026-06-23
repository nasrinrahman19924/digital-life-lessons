"use client";

import Link from "next/link";

export default function LessonCard({ lesson }) {
  return (
    <div className="border rounded-3xl p-5 shadow-sm hover:shadow-xl transition">
      <img
        src={lesson.image}
        alt={lesson.title}
        className="w-full h-52 object-cover rounded-2xl"
      />

      <div className="mt-5 space-y-3">
        <div className="flex justify-between">
          <span className="text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded-full">
            {lesson.category}
          </span>

          <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            {lesson.accessLevel}
          </span>
        </div>

        <h2 className="text-2xl font-bold">{lesson.title}</h2>

        <p className="text-gray-500">{lesson.description.slice(0, 100)}...</p>

        <div className="flex items-center gap-3">
          <img src={lesson.creatorPhoto} className="w-10 h-10 rounded-full" />

          <div>
            <p className="font-semibold">{lesson.creatorName}</p>

            <p className="text-sm text-gray-500">{lesson.createdAt}</p>
          </div>
        </div>

        <Link
          href={`/lesson/${lesson._id}`}
          className="w-full block text-center bg-violet-600 text-white py-3 rounded-xl"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}
