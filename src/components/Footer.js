import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold  text-white cursor-pointer">
          Current 2022: The Next Generation of Kafka Summit
        </div>
        <p className="py-2 text-gray-200 sm:py-0">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
