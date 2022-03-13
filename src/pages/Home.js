import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Radio from "../components/Radio";

// https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/categories

const Home = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([
    "APPAREL",
    "HATS",
    "SHIRTS",
    "BOTTOMS",
  ]);
  const [category, setCategory] = useState("");
  const [maxPages, setMaxPages] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const getCategories = async () => {
    console.log("GETTING CATEGORIES");
    const categoriesReturned = await (
      await fetch(
        `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/categories`
      )
    ).json();
    // console.log("CATEGORIES: ", categoriesReturned); // SEE DO I GET AN ARRAY OF STRINGS BEFORE SETTING
    setCategories(categoriesReturned);
  };

  const getProducts = async () => {
    let productsReturned = await (
      await fetch(
        `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products?searchTerm=${searchTerm}&page=${currentPage}`
      )
    ).json();
    console.log(productsReturned);
    console.log(
      `https://us-east-1.aws.data.mongodb-api.com/app/searchstore-zhtzd/endpoint/products?searchTerm=${searchTerm}&page=${currentPage}`
    );

    console.log("MAXPAGES: ", Object.values(productsReturned.maxPages)[0]);
    setMaxPages(Object.values(productsReturned.maxPages)[0]);
    setProducts(productsReturned.products);
  };

  useEffect(() => {
    if (searchTerm !== "" && searchTerm.length > 3) {
      getProducts();
      getCategories();
      console.log("GETTING PRODUCTS");
    }
    // eslint-disable-next-line
  }, [searchTerm, currentPage]); // add all external values your effect function depends on - none in this case  -- currentPage

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white w-full min-h-screen">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Container>
          <Hero />
          <div className="flex space-x-8">
            <Radio
              categories={categories}
              category={category}
              title="Category"
            />
            <Radio
              categories={categories}
              category={category}
              setCategory={setCategory}
              title="Price"
            />
            <Radio
              categories={categories}
              category={category}
              setCategory={setCategory}
              title="Average Review"
            />
          </div>

          <Products products={products} />
          <Pagination
            maxPages={maxPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
