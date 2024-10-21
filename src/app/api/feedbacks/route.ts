import {
  Feedbacks,
  type InsertFeedbacks,
  Product,
  type SelectProduct,
} from "@/drizzle/schema";
import { db } from "@/lib/db";
import type { productType } from "@/lib/types";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  try {
    const itemID = Number.parseInt(`${req.headers.get("itemID")}`);
    const darray: SelectProduct[] = await db
      .select()
      .from(Product)
      .where(eq(Product.ProductID, itemID));
    if (!darray || darray.length === 0) throw new Error("Item ID not Found");
    const d = darray[0];

    return NextResponse.json({
      id: Number.parseInt(`${d.ProductID}`),
      name: d.ProductName,
      date: `${d.Date}`,
      feedbacks: 1,
      price: Number.parseFloat(d.Price),
      description: d.ProductDesc,
      image: `/products/product_0${d.ProductID ? (d.ProductID % 5) + 1 : 1}.webp`,
    } as productType);
  } catch (error) {
    console.error(error);
    redirect("/");
  }
};

const POST = async (req: NextRequest) => {
  try {
    const body: InsertFeedbacks = await req.json();

    const res = await db.insert(Feedbacks).values({
      Date: body.Date,
      feedback: body.feedback,
      name: body.name,
      ProductID: body.ProductID,
    });
    console.log(res);

    return NextResponse.json({ status: 200, msg: "Comment Added" });
  } catch (error) {
    return NextResponse.json({ error: error, status: 401 });
  }
};

export { GET, POST };
