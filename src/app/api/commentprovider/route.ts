import { Feedbacks } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  try {
    const itemID = Number.parseInt(`${req.headers.get("itemID")}`);
    const darray = await db
      .select()
      .from(Feedbacks)
      .where(eq(Feedbacks.ProductID, itemID));

    return NextResponse.json(darray);
  } catch (error) {
    return NextResponse.json({ status: 401, error: error });
  }
};

export { GET };
