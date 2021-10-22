import React, { useState, useEffect } from "react";
import Deals from "../common/Deals";
import ProductsList from "../products/ProductsList";
import { Container } from "react-bootstrap";
import SearchBar from "../common/SearchBar";
const proData = require("../data/products.json");

const Main = () => {
  return (
    <Container>
      <SearchBar placeholder="Search Product.." data={proData} />
      <Deals />
      <ProductsList />
    </Container>
  );
};

export default Main;
