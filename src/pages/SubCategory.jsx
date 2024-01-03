import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams,useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumbs from "../components/BreadCrumbs";

const SubCategory = ({ products }) => {
  const { category, subcategory } = useParams();
  console.log("category : ", category);
  console.log("sub category : ", subcategory);
  console.log("products : ", products);
  //for breadcrumbs
  const {pathname} = useLocation();
  console.log("pathnam:",pathname);
  const titles = pathname.split('/');
  console.log("titles",titles);
  const mainTitle = titles[1];
  const mainUrl = '/'+titles[1];
  console.log("mainTitle",mainTitle);
  console.log("mainUrl",mainUrl);
  const catTitle = titles[2];
  const catUrl = '/'+titles[1]+'/'+titles[2];
  console.log("catTitle",catTitle);
  console.log("catUrl",catUrl);
  const subcatTitle = titles[3];
  const subcatUrl = pathname;
  console.log("subcatTitle",subcatTitle);
  console.log("subcatUrl",subcatUrl);


  // Filter products based on the category parameter
  const filteredProducts = subcategory
    ? products[subcategory] || [] // Use an empty array if the category is not found
    : [];
  console.log("Filtered products : ", filteredProducts.length);

  // const check = filteredProducts.find((product)=>product.productId == 599991275);
  // console.log("ckeck",check);

  return (
    <Container className="product-list-container">
      <BreadCrumbs mainTitle={mainTitle} mainUrl={mainUrl} catTitle={catTitle} catUrl={catUrl} subcatTitle={subcatTitle} subcatUrl={subcatUrl} />
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.productId} xs={12} md={6} lg={4}>
            <ProductCard
              key={product.productId}
              product={product}
              category={category}
              subcategory={subcategory}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubCategory;
