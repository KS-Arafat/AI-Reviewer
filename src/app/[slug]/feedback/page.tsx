import { geistMono, mistergrape, sinera } from "@/app/fontProvider";
import Comments from "@/components/Comments";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 2,
    name: "Iphone",
    price: 99.99,
    description: "Over Priced Trash Phone",
    image: "/products/product_02.webp",
  },

  {
    id: 4,
    name: "Tablet",
    price: 99.99,
    description: "Some brand of Ipad",
    image: "/products/product_04.webp",
  },
  {
    id: 5,
    name: "Apple Watch",
    price: 99.99,
    description: "Electronic Waste",
    image: "/products/product_05.webp",
  },
];

const Feedbacks = ({ params }: { params: { slug: string } }) => {
  const product =
    products[products.findIndex((v) => v.id.toString() === params.slug)];

  return (
    <div className="flex flex-col items-center justify-center">
      <Link
        href={`/${params.slug}/aireview`}
        className="fixed bottom-20 right-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border-b border-r border-orange-300 bg-orange-200 text-center font-bold drop-shadow-xl transition-all hover:bg-gradient-to-br hover:from-orange-300 hover:via-orange-400 hover:to-orange-200 hover:text-white"
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
          src={product.image}
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
          <span className="py-5 text-xl font-bold">{product.name}</span>
          <span
            className={`border-b border-b-cyan-500 text-4xl font-bold text-cyan-500 ${sinera.className}`}
          >
            Product Price
          </span>
          <span className="py-5 text-xl font-bold">{product.price}$</span>
          <span
            className={`border-b border-b-cyan-500 text-4xl font-bold text-cyan-500 ${sinera.className}`}
          >
            Description
          </span>
          <span className="py-5 text-xl font-bold">{product.description}</span>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Feedbacks;
