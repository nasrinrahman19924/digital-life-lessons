import clientPromise from "@/lib/db";

import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;

    const db = client.db("digital-life-lessons");

    const result = await db.collection("lessons").deleteOne({
      _id: new ObjectId(params.id),
    });

    return Response.json(result);
  } catch (error) {
    return Response.json(
      { message: error.message },

      { status: 500 },
    );
  }
}

export async function PATCH(req, { params }) {
  try {
    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("digital-life-lessons");

    const result = await db.collection("lessons").updateOne(
      {
        _id: new ObjectId(params.id),
      },

      {
        $set: body,
      },
    );

    return Response.json(result);
  } catch (error) {
    return Response.json(
      { message: error.message },

      { status: 500 },
    );
  }
}
