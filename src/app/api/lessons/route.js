import clientPromise from "@/lib/db";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("digital-life-lessons");

    const lessonsCollection = db.collection("lessons");

    const lessons = await lessonsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json(lessons);
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;

    const db = client.db("digital-life-lessons");

    const lessonsCollection = db.collection("lessons");

    const lesson = {
      ...body,

      likes: 0,

      favorites: 0,

      comments: 0,

      createdAt: new Date(),
    };

    const result = await lessonsCollection.insertOne(lesson);

    return Response.json({
      success: true,

      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
