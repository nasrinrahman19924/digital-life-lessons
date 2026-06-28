import { ObjectId } from "mongodb";
import { getCollections } from "@/lib/collections";

export async function PATCH(req, { params }) {
  const body = await req.json();

  const { users } = await getCollections();

  const result = await users.updateOne(
    {
      _id: new ObjectId(params.id),
    },
    {
      $set: body,
    }
  );

  return Response.json(result);
}