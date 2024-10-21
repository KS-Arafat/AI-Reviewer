import { Product, type SelectProduct } from "@/drizzle/schema";
import { db } from "@/lib/db";
import type { productType } from "@/lib/types";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  const products: productType[] = [];
  let ddata: SelectProduct[] = [];

  const email = req.headers.get("Email");
  if (email)
    ddata = await db.select().from(Product).where(eq(Product.Seller, email));
  else ddata = await db.select().from(Product);

  for (const d of ddata) {
    products.push({
      id: Number.parseInt(`${d.ProductID}`),
      name: d.ProductName,
      date: `${d.Date}`,
      feedbacks: 1,
      price: Number.parseFloat(d.Price),
      description: d.ProductDesc,
      image: `/products/product_0${d.ProductID ? (d.ProductID % 5) + 1 : 1}.webp`,
    });
  }

  return NextResponse.json(products satisfies productType[]);
};

export { GET };
