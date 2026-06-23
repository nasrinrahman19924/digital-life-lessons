import LessonDetails from "@/components/lesson/LessonDetails";

export default async function LessonPage() {
  const lesson = {
    title: "Never Compare Yourself",

    description:
      "Your timeline is different from everyone else. Focus on your own growth and build your future step by step.",

    category: "Mindset",

    emotionalTone: "Motivational",

    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  };

  return <LessonDetails lesson={lesson} />;
}
