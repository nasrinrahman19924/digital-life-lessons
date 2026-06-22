import LessonCard from "@/components/lesson/LessonCard";

const lessons = [
  {
    _id: 1,

    title: "Failure teaches success",

    description: "Every failure teaches something important.",

    category: "Mindset",

    accessLevel: "Free",

    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function PublicLessonsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-5xl font-bold mb-10">Public Lessons</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {lessons.map((lesson) => (
          <LessonCard key={lesson._id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
