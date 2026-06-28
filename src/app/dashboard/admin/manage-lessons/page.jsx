"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManageLessons() {
  const [lessons, setLessons] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadLessons();
  }, []);

  const loadLessons = async () => {
    const res = await fetch("/api/lessons");
    const data = await res.json();
    setLessons(data);
  };

  // View Lesson
  const viewLesson = (id) => {
    router.push(`/lessons/${id}`);
  };

  // Edit Lesson
  const editLesson = (id) => {
    router.push(`/dashboard/edit-lesson/${id}`);
  };

  // Delete Lesson
  const deleteLesson = async (id) => {
    if (!confirm("Delete this lesson?")) return;

    await fetch(`/api/lessons/${id}`, {
      method: "DELETE",
    });

    loadLessons();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Manage Lessons</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>

              <th>Category</th>

              <th>Visibility</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson._id}>
                <td>{lesson.title}</td>

                <td>{lesson.category}</td>

                <td>
                  {lesson.visibility === "premium" ? (
                    <span className="badge badge-warning">Premium</span>
                  ) : (
                    <span className="badge badge-success">Public</span>
                  )}
                </td>

                <td>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => viewLesson(lesson._id)}
                      className="btn btn-sm btn-success"
                    >
                      👁 View
                    </button>

                    <button
                      onClick={() => editLesson(lesson._id)}
                      className="btn btn-sm btn-primary"
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => deleteLesson(lesson._id)}
                      className="btn btn-sm btn-error"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
