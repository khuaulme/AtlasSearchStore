import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Radio from "../components/Radio";
import CheckBox from "../components/Checkbox";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [market, setMarket] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [maxPages, setMaxPages] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showSponsored, setShowSponsored] = useState(false);

  const getProductsEndpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products";

  const getProducts = async () => {
    let data = {
      searchTerm,
      categories,
      market,
      showSponsored,
      page: currentPage,
    };

    axios.post(getProductsEndpoint, data).then((res) => {
      setProducts(res.data.products);
      console.log(res.data.products);
      if (res.data.products.length !== 0) setShowResults(true);
    });
  };

  useEffect(() => {
    if (searchTerm !== "" && searchTerm.length > 2) {
      getProducts();
      //   getCategories();
      console.log("GETTING PRODUCTS");
    }

    // eslint-disable-next-line
  }, [searchTerm, categories]); // add all external values your effect function depends on - none in this case  -- currentPage

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white w-full min-h-screen">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Container>
          <Hero />
          <div className="flex space-x-8">
            <div>
              {/* <form className="mt-8" onSubmit={handleSubmit}> */}
              <CheckBox categories={categories} setCategories={setCategories} />
              <Radio
                options={markets}
                option={market}
                setOption={setMarket}
                title="Marketplace"
              />
              <button
                onClick={() => setShowSponsored(!showSponsored)}
                className="relative mt-8 py-2 text-center bg-red-700 text-white text-2xl w-72 rounded-lg"
                type="button"
              >
                <span>Show Specials ✨🎉</span>{" "}
              </button>
            </div>

            {showResults ? (
              <Products products={products} />
            ) : (
              <div className="mt-20 py-2 text-center text-black w-full text-6xl rounded-lg">
                Shopping Results
              </div>
            )}
          </div>
          {/* <Pagination
            maxPages={maxPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          /> */}
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

const markets = ["Amazon", "PrimeNow", "AmazonDistribution"];

// let productsReturned = await (
//   await fetch(
//     `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products?searchTerm=${searchTerm}&page=${currentPage}`
//   )
// ).json();
// console.log(productsReturned);
// console.log(
//   `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products?searchTerm=${searchTerm}&page=${currentPage}`
// );

// console.log("MAXPAGES: ", Object.values(productsReturned.maxPages)[0]);
// setMaxPages(Object.values(productsReturned.maxPages)[0]);
// setProducts(productsReturned.products);
//  const getCategories = async () => {
//    console.log("GETTING CATEGORIES");
//    const categoriesReturned = await (
//      await fetch(
//        `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/categories`
//      )
//    ).json();
//    // console.log("CATEGORIES: ", categoriesReturned); // SEE DO I GET AN ARRAY OF STRINGS BEFORE SETTING
//    setCategories(categoriesReturned);
//  };
