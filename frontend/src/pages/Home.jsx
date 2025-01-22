import React from "react";
import Hero from "../components/hero/Hero";
import Categories from "../components/categories/Categories";
import NewProducts from "../components/newProducts/NewProducts";
import Shop from "../components/shop/Shop";
import Related from "../components/related/Related";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Hero />
      <Categories />
      <NewProducts />
      <Shop />
      <Related />
    </>
  );
}
