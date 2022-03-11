import React from "react";

const Pagination = ({ maxPages, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  console.log("IN PAGINATION");
  console.log(maxPages);

  // let n = maxPages;
  // let numPages = n[0];

  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-10">
      <ul className="flex justify-center text-2xl">
        {pageNumbers.map((number) =>
          currentPage === number ? (
            <button
              key={number}
              className="py-2 px-4 leading-tight bg-green-700 border border-gray-200 text-white border-r-0 hover:bg-green-500 hover:text-white"
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number}
            </button>
          ) : (
            <button
              key={number}
              onClick={() => {
                setCurrentPage(number);
              }}
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-green-700 border-r-0 hover:bg-green-500 hover:text-white"
            >
              {number}
            </button>
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
