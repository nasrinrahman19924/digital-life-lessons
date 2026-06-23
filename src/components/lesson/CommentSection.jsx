"use client";

import { useState } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();

    console.log(comment);

    setComment("");
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Comments</h2>

      <form onSubmit={handleComment} className="space-y-5">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-5 rounded-2xl"
          rows="5"
          placeholder="Write comment"
        />

        <button className="bg-violet-600 text-white px-8 py-3 rounded-xl">
          Comment
        </button>
      </form>
    </div>
  );
}
