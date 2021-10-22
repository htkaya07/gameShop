import React, { useState } from "react";
// import "./SearchBar.css";

import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import './SearchBar.css'
import { CardGroup, Card, Container, Col, Row } from "react-bootstrap";
import ProductCard from "../products/ProductCard";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {/* {filteredData.slice(0, 15).map((value, key) => {
            return ( */}
            {/* //   <a className="dataItem" href={value.link} target="_blank">
            //     <p>{value.title} </p>
            //   </a> */}

            <Row xs={2} md={5} className="g-4">
                    {filteredData.map((c) => (
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
            {/* );
          })} */}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
