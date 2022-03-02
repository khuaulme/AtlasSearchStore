import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-green-500 hover:text-green-400 cursor-pointer">
          MONGOSTORE LINK GOES HERE
        </div>
        <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
