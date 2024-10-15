import { NextResponse } from "next/server";
type productType = {
  name: string;
  feedbacks: number;
  date: string;
};

const products: productType[] = [
  {
    name: "Wireless Mouse",
    feedbacks: 120,
    date: "2023-10-01",
  },
  {
    name: "Bluetooth Speaker",
    feedbacks: 85,
    date: "2023-09-15",
  },
  {
    name: "Laptop Stand",
    feedbacks: 210,
    date: "2023-08-20",
  },
  {
    name: "USB-C Hub",
    feedbacks: 60,
    date: "2023-07-05",
  },
  {
    name: "Gaming Keyboard",
    feedbacks: 150,
    date: "2023-06-25",
  },
];

const GET = async () => NextResponse.json(products);

export { GET };
