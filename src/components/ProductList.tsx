type productType = {
  name: string;
  feedbacks: number;
  date: string;
};

const ProductList = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    next: {
      tags: ["productlist"],
    },
  });
  const productList: productType[] = await res.json();

  return (
    <tbody>
      {productList?.map((e) => (
        <tr
          key={Math.random()}
          className="border-b text-center hover:bg-gray-50"
        >
          <td className="px-6 py-3">{e.name}</td>
          <td className="px-6 py-3">{e.feedbacks}</td>
          <td className="px-6 py-3">{e.date}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductList;
