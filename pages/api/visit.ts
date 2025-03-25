import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { db } = await connectToDatabase();
    const counter = await db.collection("counter");

    const result = await counter.findOneAndUpdate(
      { _id: "visits" },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

    res.status(200).json({ count: result.value.count });
  } catch (error) {
    res.status(500).json({ message: "Error updating visit counter" });
  }
}
