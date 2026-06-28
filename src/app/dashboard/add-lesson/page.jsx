"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function AddLessonPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",

    category: "",

    description: "",

    emotionalTone: "",

    tags: "",

    image: "",

    visibility: "public",

    accessLevel: "free",
  });

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (lessonType === "premium" && !user?.isPremium) {
      alert("Upgrade to Premium first.");
      return;
    }

    setLoading(true);

    try {
      const lesson = {
        ...form,

        tags: [],

        isPublic: true,

        authorName: "Demo User",

        authorEmail: "demo@gmail.com",

        authorImage: "",

        likes: 0,

        favorites: 0,

        createdAt: new Date(),
      };

      const response = await fetch("/api/lessons", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(lesson),
      });

      if (response.ok) {
        router.push("/dashboard/my-lessons");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Add Lesson</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          required
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <input
          required
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <input
          required
          name="emotionalTone"
          placeholder="Emotional Tone"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />
        <select
          name="visibility"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        >
          <option value="public">Public</option>

          <option value="private">Private</option>
        </select>
        <select
          name="accessLevel"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        >
          <option value="free">Free</option>

          <option value="premium">Premium</option>
        </select>

        <textarea
          required
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl h-40"
        />
        <input
          name="tags"
          placeholder="success, life, growth"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <button
          disabled={loading}
          className="bg-violet-600 text-white px-6 py-3 rounded-xl"
        >
          {loading ? "Saving..." : "Save Lesson"}
        </button>
      </form>
    </div>
  );
}
