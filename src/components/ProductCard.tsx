"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { productType } from "@/lib/types";

const ProductCard = ({ product }: { product: productType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="max-h-96 max-w-96 overflow-hidden transition-all hover:drop-shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/${product.id}/feedback`}>
        <CardContent className="relative p-0">
          <Image
            src={`/products/product_0${(product.id % 5) + 1}.webp`}
            alt={product.name}
            width={400}
            height={400}
            className="h-fit w-full outline transition-all duration-300 ease-in-out"
            style={{ filter: isHovered ? "blur(5px)" : "none" }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center text-white"
          >
            <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
            <p className="mb-2 text-lg font-bold">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm">{product.description}</p>
          </motion.div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
