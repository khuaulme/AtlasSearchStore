import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const ProductModal = ({ setShowProductModal, products, productIndex }) => {
  return (
    <div className="fixed inset-0 z-20 p-20 flex justify-center bg-smoke-dark">
      <div className="relative flex flex-col w-2/3 h-1/6 bg-white border-2 border-black rounded mt-60 p-8">
        <div>
          {" "}
          Product Modal - CALL SCOTT'S API with customerID, product, category,
          and timestamp - products[index]
        </div>
        <div>{products[productIndex].name}</div>

        <ShoppingCartIcon
          className="h-12 w-12 p-1 absolute bottom-0 left-0 ml-3 mb-3 text-white bg-black rounded-full"
          onClick={() => "setIsCartOpen(!isCartOpen)"}
        />
        <div
          className="absolute bottom-0 right-0 ml-3 mb-3"
          onClick={() => {
            setShowProductModal(false);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            viewBox="0 0 20 20"
            fill="#ff0000"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
