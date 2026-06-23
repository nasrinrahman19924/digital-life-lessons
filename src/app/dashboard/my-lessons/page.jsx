"use client";

import { useEffect, useState } from "react";

export default function MyLessonsPage() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await fetch("/api/lessons");

      const data = await response.json();

      setLessons(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">My Lessons</h1>

      <div className="overflow-x-auto border rounded-3xl">
        <table className="w-full">
          <thead>
            <tr className="h-16 border-b">
              <th>Title</th>

              <th>Category</th>

              <th>Likes</th>

              <th>Favorites</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson._id} className="h-20 border-b">
                <td>{lesson.title}</td>

                <td>{lesson.category}</td>

                <td>{lesson.likes}</td>

                <td>{lesson.favorites}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
