export default function LessonDetails({ lesson }) {
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

      <p className="text-lg leading-9 text-gray-600">{lesson.description}</p>
    </div>
  );
}
