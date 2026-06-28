import { getCollections } from "@/lib/collections";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    const { users } = await getCollections();

    if (email) {
      const user = await users.findOne({ email });
      return Response.json(user || {});
    }

    const data = await users.find().toArray();
    return Response.json(data);
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

    const { users } = await getCollections();

    const existing = await users.findOne({
      email: body.email,
    });

    if (existing) {
      return Response.json(existing);
    }

    const result = await users.insertOne(body);

    return Response.json(result);
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
