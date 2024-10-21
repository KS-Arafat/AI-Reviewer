"use server";
import { Product } from "@/drizzle/schema";
import authOpts from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const generateProductID = (): number => {
  const min = 100000000;
  const max = 999999999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const UploadProduct = async (data: FormData) => {
  const cookieStore = cookies();
  const session = await getServerSession(authOpts);
  const uemail = session?.user?.email;
  if (!uemail) {
    for (const cookie of cookieStore.getAll()) {
      cookieStore.delete(cookie.name);
    }
    redirect("/");
  }
  const productName = data.get("productName");
  const productDescription = data.get("productDescription");
  const productPrice = data.get("productPrice");
  const productImage = data.get("productImage");

  if (!productName || !productDescription || !productPrice || !productImage)
    return;

  await db.insert(Product).values({
    ProductID: generateProductID(),
    ProductName: productName.toString(),
    ProductDesc: productDescription.toString(),
    Price: productPrice.toString(),
    Seller: uemail,
  });
  revalidateTag("productlist");
  redirect("/");
};

export default UploadProduct;
