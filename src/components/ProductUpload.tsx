import { Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
              <Upload className="mr-2 mt-1 h-4 w-4" />
              Upload Product
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductUpload;
