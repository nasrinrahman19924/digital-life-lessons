import clientPromise from "@/lib/db";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("digital-life-lessons");

    const reports = await db
      .collection("reports")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json(reports);
  } catch (error) {
    return Response.json(
      {
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
