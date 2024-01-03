import React, { useEffect, useState } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoryAccordions from "../components/CategoryAccordions";

const MainCategory = ({ products }) => {
  const { pathname } = useLocation();
  console.log("path", pathname);
  const mainTitle = pathname?.substring(1);
  const mainUrl = pathname;

  const filteredProducts = [].concat(...Object.values(products));
  console.log("filteredProducts", filteredProducts);

  //unique productid check
  // const check = filteredProducts.find((product)=>product.productId == 599990499);
  // console.log("check",check);

  console.log("Filtered products : ", filteredProducts);

  function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying the original array
    const shuffledArray = [...array];

    // Fisher-Yates Shuffle Algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }

  // Example usage:
  const shuffledArray = shuffleArray(filteredProducts);

  console.log(shuffledArray);
  //rough
  // const categories = ["premiumfruits", "beauty", "bags"];
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };
  const mainCategories = ["premiumfruits", "beauty", "BagsAndLuggages"];
  const categoriesByMainCategory = {
    premiumfruits: ["Category A1", "Category A2", "Category A3"],
    beauty: ["Category B1", "Category B2", "Category B3"],
    BagsAndLuggages: ["Category C1", "Category C2", "Category C3"],
  };
  const subcategoriesByCategory = {
    "Category A1": ["Subcategory A1.1", "Subcategory A1.2", "Subcategory A1.3"],
    "Category A2": ["Subcategory A1.1", "Subcategory A1.2", "Subcategory A1.3"],
    "Category A3": ["Subcategory A1.1", "Subcategory A1.2", "Subcategory A1.3"],
    "Category B1": ["Subcategory B1.1", "Subcategory B1.2", "Subcategory B1.3"],
    "Category B2": ["Subcategory B1.1", "Subcategory B1.2", "Subcategory B1.3"],
    "Category B3": ["Subcategory B1.1", "Subcategory B1.2", "Subcategory B1.3"],
    "Category C1": ["Subcategory C1.1", "Subcategory C1.2", "Subcategory C1.3"],
    "Category C2": ["Subcategory C1.1", "Subcategory C1.2", "Subcategory C1.3"],
    "Category C3": ["Subcategory C1.1", "Subcategory C1.2", "Subcategory C1.3"],
  };
  
  return (
    <Container fluid className="product-list-container">
      {/* First Row with Breadcrumbs */}
      <Row>
        <Col>
          <BreadCrumbs mainTitle={mainTitle} mainUrl={mainUrl} />
        </Col>
      </Row>
      {/* Second Row with Two Columns */}
      <Row>
        {/* Left Column with Category Accordions */}
        <Col md={3} lg={3}>
          <CategoryAccordions mainCategories={mainCategories} categoriesByMainCategory={categoriesByMainCategory} subcategoriesByCategory={subcategoriesByCategory}/>
        </Col>
        <Col md={9}>
          <Row>
            {shuffledArray.map((product) => (
              <Col
                key={product.productId}
                xs={12}
                md={6}
                lg={4}
                style={{ display: "flex", direction: "column" }}
              >
                <ProductCard
                  key={product.productId}
                  product={product}
                  category={"allproducts"}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCategory;
