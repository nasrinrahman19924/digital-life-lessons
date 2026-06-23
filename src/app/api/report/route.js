import clientPromise from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("digital-life-lessons");

    const result = await db.collection("lessonReports").insertOne({
      ...body,

      createdAt: new Date(),
    });

    return Response.json(result);
  } catch (error) {
    return Response.json(
      { message: error.message },

      { status: 500 },
    );
  }
}
