import React, { useState } from "react";
import ProductDescription from "./ProductDescription";

import { ShoppingCartIcon, CodeIcon } from "@heroicons/react/outline";

const Product = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  let description = [];
  let score = 0;
  if (product.main_description) {
    description = product.main_description;
  }
  if (product.score) {
    score = Object.values(product.score)[0];
    score = score.toString().slice(0, 5);
  }

  let price = Object.values(product.price.value)[0];

  const handleOnClick = () => {
    if (product.main_description) setShowDescription(!showDescription);
  };

  return (
    <div href={`/products/${product._id}`}>
      <div
        onClick={handleOnClick}
        className="w-full max-w-sm mx-auto rounded-md shadow-md cursor-pointer hover:shadow-2xl transition relative"
      >
        <div className="flex items-end justify-end h-56 w-full bg-cover ">
          <img
            src={product.main_image_url}
            alt={product.name}
            className="object-scale-down h-48 w-full"
          />

          <button className="absolute z-10 p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
          {product.score && (
            <div className=" p-2 absolute text-lg bg-rose-700 z-10 top-0 shadow-xl rounded-full text-white my-auto mb-0  transform transition duration-500 hover:scale-125 focus:outline-none ">
              {score}
            </div>
          )}
        </div>

        <div className="px-5 py-3">
          <h3 className="text-gray-900 uppercase">{product.name}</h3>
          {product.category && (
            <h3 className="text-green-800 text-sm">
              CATEGORY: {product.category}
            </h3>
          )}
          <span className="text-gray-500 mt-2">${price}</span>
          <h3 className="text-red-500 mt-2">{product.marketplace}</h3>
          {showDescription && (
            <ProductDescription
              title={product.name}
              highlights={product.highlights}
              description={description}
              image={product.main_image_url}
              price={price}
              category={product.category}
              setShowDescription={setShowDescription}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
