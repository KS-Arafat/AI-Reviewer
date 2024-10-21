import { geistMono, mistergrape, sinera } from "@/app/fontProvider";
import CommentSection from "@/components/Comments";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { CommentType, productType } from "@/lib/types";

const Feedbacks = async ({ params }: { params: { slug: string } }) => {
  let itemID = 0;
  let itemData: productType;
  let prevComments: CommentType[];
  try {
    itemID = Number.parseInt(params.slug);
    const res1 = await fetch("http://localhost:3000/api/feedbacks", {
      headers: {
        itemID: itemID.toString(),
      },
      cache: "no-store",
    });
    const res2 = await fetch("http://localhost:3000/api/commentprovider", {
      headers: {
        itemID: itemID.toString(),
      },
      cache: "no-store",
    });

    itemData = await res1.json();
    prevComments = await res2.json();
  } catch (error) {
    console.error(error);
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <Link
        href={`/${params.slug}/aireview`}
        className="fixed bottom-20 right-20 z-50 flex h-24 w-24 scale-75 flex-col items-center justify-center rounded-full border-b border-r border-transparent bg-[#ccf7ff] text-center font-bold shadow-xl transition-all hover:scale-100 hover:border-orange-200 hover:bg-gradient-to-br hover:from-[#b3ffe5] hover:via-[#b3ffe5] hover:to-[#80ffd5] hover:text-slate-600 hover:shadow-white"
      >
        <span className={`${geistMono.className}`}>
          AI
          <br />
          Review
        </span>
      </Link>
      <div className="mb-10 grid h-20 min-w-full grid-cols-3 rounded-b-md bg-gradient-to-br from-sky-500 via-blue-300 to-cyan-300 shadow-lg shadow-sky-200">
        <Link className="w-24 p-4" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-house mx-auto h-12 w-12 transition-all ease-in-out hover:stroke-amber-300"
          >
            <title>Home</title>
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </Link>

        <span
          className={`w-5/6 pt-3 text-center text-6xl ${mistergrape.className} from-yellow-300 via-orange-400 to-amber-500 bg-clip-text transition-all hover:bg-gradient-to-br hover:text-transparent`}
        >
          Product Info
        </span>
        <div className="flex flex-row items-end justify-end p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-round-search relative right-0 h-12 w-12"
          >
            <title>Profile</title>
            <circle cx="10" cy="8" r="5" />
            <path d="M2 21a8 8 0 0 1 10.434-7.62" />
            <circle cx="18" cy="18" r="3" />
            <path d="m22 22-1.9-1.9" />
          </svg>
        </div>
      </div>
      <div className="mb-10 flex flex-row items-center justify-center gap-10">
        <Image
          className="aspect-auto w-96 rounded-lg"
          src={`/products/product_0${(itemID % 5) + 1}.webp`}
          width={300}
          height={300}
          alt="Product"
        />
        <div className="flex h-96 flex-col items-end justify-start">
          <span
            className={`border-b border-b-cyan-500 text-4xl font-bold text-cyan-500 ${sinera.className}`}
          >
            Product Name
          </span>
          <span className="py-5 text-xl font-bold">{itemData.name}</span>
          <span
            className={`border-b border-b-cyan-500 text-4xl font-bold text-cyan-500 ${sinera.className}`}
          >
            Product Price
          </span>
          <span className="py-5 text-xl font-bold">{itemData.price}$</span>
          <span
            className={`border-b border-b-cyan-500 text-4xl font-bold text-cyan-500 ${sinera.className}`}
          >
            Description
          </span>
          <span className="py-5 text-xl font-bold">{itemData.description}</span>
        </div>
      </div>
      <CommentSection PID={itemID} storedComments={prevComments} />
    </div>
  );
};

export default Feedbacks;
