"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ProductUpload = () => {
  return (
    <div className="mb-10 min-w-full">
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label
                className="mb-2 block text-lg font-medium text-gray-700"
                htmlFor="productName "
              >
                Product Name
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all focus:border-indigo-500 focus:shadow-lg focus:ring-indigo-500 sm:text-lg"
                id="productName"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label
                htmlFor="productDescription"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Product Description
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all focus:border-indigo-500 focus:shadow-lg focus:ring-indigo-500 sm:text-lg"
                id="productDescription"
                placeholder="Enter product description"
              />
            </div>
            <div>
              <label
                htmlFor="productPrice"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Product Price
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all focus:border-indigo-500 focus:shadow-lg focus:ring-indigo-500 sm:text-lg"
                id="productPrice"
                placeholder="Enter product price"
              />
            </div>
            <div>
              <label
                htmlFor="productImage"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Product Image
              </label>
              <input
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                id="productImage"
                type="file"
              />
            </div>
            <button
              type="submit"
              className="flex w-fit flex-row rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-blue-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
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
                className="lucide lucide-upload mr-2 mt-1 h-4 w-4"
              >
                <title>Upload</title>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
              Upload Product
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductUpload;
