import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

// Approve Report
export async function PATCH(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("digital-life-lessons");

    const result = await db.collection("reports").updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: {
          status: "approved",
        },
      },
    );

    return Response.json(result);
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

// Ignore Report
export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("digital-life-lessons");

    const result = await db.collection("reports").deleteOne({
      _id: new ObjectId(params.id),
    });

    return Response.json(result);
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
