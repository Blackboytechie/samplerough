import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Search = ({ products }) => {
  console.log("products", products);
  const { searchTerm } = useParams();
  console.log("searchTerm", searchTerm.toLowerCase());

  const searchedProducts = products.filter(
    (product) =>
      product.shortDesc.toLowerCase().split(" ").includes(searchTerm) && product
  );

  console.log("results", searchedProducts);
  searchedProducts.length > 0 ? console.log("true") : console.log("false");
  
  return (
    <>
      <Container className="product-list-container">
        <h3>search results</h3>
        {searchedProducts.length > 0 ? (
          <Row>
            {searchedProducts.map((product) => (
              <Col key={product.productId} xs={12} md={6} lg={4}>
                <ProductCard
                  key={product.productId}
                  product={product}
                  category={"searched"}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={6} lg={4}>
              <p>No results found</p>
            </Col>
          </Row>
        )}
        {/* <Row>
        {shuffledArray.map((product) => (
          <Col key={product.productId} xs={12} md={6} lg={4}>
            <ProductCard key={product.productId} product={product} category={"allfruits"} />
          </Col>
        ))}
      </Row> */}
      </Container>
    </>
  );
};

export default Search;
