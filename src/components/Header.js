import React, { useState, useEffect, useRef } from "react";

import {
  ShoppingCartIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
// import Cart from "./Cart";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const initial = useRef(true);

  const Suggestions_AC_Endpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/mongostore-elxkl/endpoint/names";
  //  "https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/names";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEARCHTERM: ", searchTerm);
    setShowSuggestions(false);
  };

  const fetchAC_Names = async (searchTerm) => {
    let autocomplete_names_endpoint = Suggestions_AC_Endpoint;
    if (searchTerm) {
      autocomplete_names_endpoint =
        autocomplete_names_endpoint + `?searchName=${searchTerm}`;
    }
    try {
      let productNames = await (
        await fetch(autocomplete_names_endpoint)
      ).json();
      console.log(productNames);

      setAutoComplete(productNames);
      console.log("NAMES: ", autoComplete.length);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    // BUILD OUT AUTOCOMPLETE TERMS
    if (searchTerm === "") setShowSuggestions(false);
    if (searchTerm !== "" && searchTerm.length > 3) {
      fetchAC_Names(searchTerm);

      if (autoComplete.length !== 0) {
        setShowSuggestions(true);
        return;
      }
      setShowSuggestions(false);
    }
    return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleSelect = (name) => {
    setSearchTerm(name);
    setShowSuggestions(false);
    setAutoComplete([]);
  };

  return (
    <>
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div href="/">
              <div className="w-full text-green-500 text-2xl font-semibold cursor-pointer">
                MongoStore
              </div>
            </div>
            <div className="flex items-center justify-end w-full">
              <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                <ShoppingCartIcon
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="h-5 w-5"
                />
              </button>

              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <MenuIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <nav
            className={`${
              isMenuOpen ? "" : "hidden"
            } sm:flex sm:justify-center sm:items-center mt-4`}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                <div href="/">Home</div>
              </div>
              <div className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                <div href="/products">Shop</div>
              </div>
              <div
                className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                href="#"
              >
                <div href="/products/category">Categories</div>
              </div>
              <a
                className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                href="www.mongodb.com"
              >
                Contact
              </a>
              <a
                className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                href="www.mongodb.com"
              >
                About
              </a>
            </div>
          </nav>

          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5" />
            </span>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </form>
            {showSuggestions && (
              <ul className="absolute inset-x-0 top-full border border-green-600 bg-white rounded-md z-20">
                {autoComplete.map((item) => {
                  return (
                    <li
                      key={item._id}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer border-b "
                      onClick={() => handleSelect(item.name)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </header>
      {/* <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> */}
    </>
  );
};

export default Header;
