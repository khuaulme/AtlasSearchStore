import React from "react";
import HEROIMAGE from "../images/hero.jpg";
// import Image from "next/image";
// import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const Hero = () => {
  return (
    <div
      className="
    h-96 w-full bg-cover bg-center rounded-md overflow-hidden relative bg-slate-500"
    >
      <img
        src={HEROIMAGE}
        className="w-full h-full object-cover object-center mix-blend-overlay absolute"
        alt="retailtherapy"
      />
      <div className="bg-gray-900 bg-opacity-60 flex items-center h-full absolute w-full z-10">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">Tech Shirts</h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            atque recusandae ipsum odio possimus soluta!
          </p>
          <div href={`/products`}>
            <button className="flex items-center mt-4 px-3 py-2 bg-green-600 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500">
              <span>Shop NowLINK</span>
              <ArrowNarrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
