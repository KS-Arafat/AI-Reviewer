import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { mistergrape } from "../fontProvider";
import type { productType } from "@/lib/types";

const ProductGrid = async () => {
  let products: productType[] = [];
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error Fetching Data");
    products = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="">
      <div className="grid h-20 min-w-full grid-cols-3 rounded-b-md bg-gradient-to-br from-sky-500 via-blue-300 to-cyan-300 shadow-lg shadow-sky-200">
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
          Product List
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex select-none flex-row items-center justify-center gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
