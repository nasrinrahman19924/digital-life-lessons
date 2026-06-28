import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getCollections } from "@/lib/collections";
import { ObjectId } from "mongodb";

import LessonDetails from "@/components/lesson/LessonDetails";

export default async function LessonPage({ params }) {
  const { users, lessons } = await getCollections();

  // Logged in user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  let dbUser = null;

  if (session?.user?.email) {
    dbUser = await users.findOne({
      email: session.user.email,
    });
  }

  // Lesson
  const lesson = await lessons.findOne({
    _id: new ObjectId(params.id),
  });

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Lesson Not Found</h1>
      </div>
    );
  }

  return <LessonDetails lesson={lesson} user={dbUser} />;
}
