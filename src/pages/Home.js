import React, { useState } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white w-full min-h-screen">
        <Header />
        <Container>
          <Hero />
          {/* <Category
            category="Tech Wear"
            categories={categories}
            productCount={`${products.length} Products`}
          />
          <Products products={products} />
          <Pagination /> */}
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
