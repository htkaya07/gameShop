import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchForm from "../common/SearchForm";
import axios from "axios";
import { CardGroup, Card, Container, Col, Row } from "react-bootstrap";
import SearchBar from "../common/SearchBar";

const proData = require("../data/products.json");
const categories = require("../data/categories.json");

const ProductsList = () => {
  const [products, setProducts] = useState(proData);
  const [productsFiltered, setProductsFiltered] = useState(proData);
  const [focus, setFocus] = useState();


  const searchProduct = (text) => {
    setProductsFiltered(
      proData.filter(i => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  // useEffect(() => {
  //     setProducts(data);
  //     setProductFiltered(data);
  //     setFocus(false);

  //     return () => {
  //         setProducts([]);
  //         setProductFiltered([]);
  //         setFocus();
  //     }
  // },[])
  // async function fething(){
  //     let productssss= await proData;
  //     setProducts(productssss)
  // }

//   const listItems = proData.map((c) => (
//     <ProductCard
//       image={c.image}
//       key={c.id}
//       name={c.name}
//       price={c.price}
//       rating={c.rating}
//       countInStock={c.countInStock}
//     />
//   ));

  return (
    <div>
      {/* <SearchForm searchFor={searchProduct}/> */}

      <Row xs={2} md={5} className="g-4">
        {productsFiltered.map((c) => (
          <Col>
            <ProductCard
              image={c.image}
              key={c.id}
              name={c.name}
              price={c.price}
              rating={c.rating}
              countInStock={c.countInStock}
            />
          </Col>
        ))}
      </Row>
    </div>
  );


};
export default ProductsList;
