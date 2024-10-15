import React from "react";

const Loading = () => {
  return (
    <tbody>
      {[1, 2, 3, 4, 5].map((e) => (
        <tr
          key={Math.random() * e}
          className="border-b text-center hover:bg-gray-50"
        >
          <td className="px-6 py-3">
            <span className="animate-pulse rounded-lg bg-gray-400 px-16 py-2 delay-200">
              {""}
            </span>
          </td>
          <td className="px-6 py-3">
            <span className="animate-pulse rounded-lg bg-gray-400 px-16 py-2 delay-100">
              {""}
            </span>
          </td>
          <td className="px-6 py-3">
            <span className="animate-pulse rounded-lg bg-gray-400 px-16 py-2">
              {""}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Loading;
