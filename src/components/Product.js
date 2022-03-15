import React from "react";

import { ShoppingCartIcon, CodeIcon } from "@heroicons/react/outline";

const Product = ({ product }) => {
  // let price = `5.00`;
  let score = Object.values(product.score)[0];
  let price = Object.values(product.price.value)[0];

  score = score.toString().slice(0, 5);

  return (
    <div href={`/products/${product._id}`}>
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition relative">
        <div className="flex items-end justify-end h-56 w-full bg-cover ">
          <img
            src={product.main_image_url}
            alt={product.name}
            layout="fill"
            com
            className="absolute z-0 object-fill"
          />

          <button className="absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
          <div className=" p-2 absolute top-0 shadow-xl rounded bg-black text-white my-auto mb-0  focus:outline-none ">
            {score}
          </div>
        </div>

        <div className="px-5 py-3">
          <h3 className="text-gray-900 uppercase">{product.name}</h3>
          <h3 className="text-green-800">CATEGORY: {product.category}</h3>
          <span className="text-gray-500 mt-2">${price}</span>
          <h3 className="text-red-500 mt-2">{product.marketplace}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
