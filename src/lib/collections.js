import clientPromise from "./db";

export const getCollections = async () => {
  const client = await clientPromise;

  const db = client.db("digital-life-lessons");

  return {
    users: db.collection("users"),

    lessons: db.collection("lessons"),

    comments: db.collection("comments"),

    favorites: db.collection("favorites"),

    reports: db.collection("lessonReports"),

    payments: db.collection("payments"),
  };
};
