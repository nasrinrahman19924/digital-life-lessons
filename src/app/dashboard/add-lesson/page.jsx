"use client";

export default function AddLessonPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-10">Add New Lesson</h1>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Lesson Title"
          className="w-full border p-4 rounded-xl"
        />

        <textarea
          placeholder="Description"
          rows={6}
          className="w-full border p-4 rounded-xl"
        />

        <select className="w-full border p-4 rounded-xl">
          <option>Personal Growth</option>

          <option>Career</option>

          <option>Relationships</option>

          <option>Mindset</option>
        </select>

        <button className="bg-violet-600 text-white px-6 py-3 rounded-xl">
          Create Lesson
        </button>
      </form>
    </div>
  );
}
