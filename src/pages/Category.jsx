import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams,useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumbs from "../components/BreadCrumbs";

const Category = ({ products }) => {
  const [showdata, setShowdata] = useState([]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const {category} =useParams();
  const { pathname } = useLocation();
  console.log("pathname",pathname);
  const titles = pathname.split('/');
  console.log("titles",titles);
  const mainTitle = titles[1];
  const mainUrl = '/'+titles[1];
  console.log("mainTitle",mainTitle);
  console.log("mainUrl",mainUrl);
  const catTitle = titles[2];
  const catUrl = pathname;
  console.log("catTitle",catTitle);
  console.log("catUrl",catUrl);
  
  console.log("category : ", category);
  console.log("products : ", products);

  let filteredProducts;
  if (category === "apples-pears") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.apples && products.pears) {
      filteredProducts = [...products.apples, ...products.pears];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "avacado-peach-plum") {
    // Check if 'avocados','nectarines','peaches properties exist in the products object
    if (products && products.avacados && products.peaches&& products.nectarines) {
      filteredProducts = [...products.avacados, ...products.peaches,...products.nectarines];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "banana-melons-coconut") {
    // Check if 'bananas','coconuts','melons properties exist in the products object
    if (products && products.coconuts && products.melons && products.bananas) {
      filteredProducts = [...products.coconuts, ...products.melons,...products.bananas];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "cherries-berries-exotic-fruits") {
    // Check if 'cherries','berries','dragonfruits' properties exist in the products object
    if (products && products.cherries && products.berries && products.dragonfruits) {
      filteredProducts = [...products.cherries, ...products.berries,...products.dragonfruits];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "citrus-mango-grapes") {
    // Check if 'citrus','grspes', properties exist in the products object
    if (products && products.grapes && products.citrus) {
      filteredProducts = [...products.grapes, ...products.citrus];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "dates") {
    // Check if 'wetdates' properties exist in the products object
    if (products && products.wetdates) {
      filteredProducts = [...products.wetdates];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "gift-assorted-xl-packs") {
    // Check if 'giftpacks' properties exist in the products object
    if (products && products.giftpacks) {
      filteredProducts = [...products.giftpacks];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "pomegranate-papaya-pineapple") {
    // Check if 'pomegranates','pineapples','papayas' properties exist in the products object
    if (products && products.pomegranates && products.papayas && products.pineapples) {
      filteredProducts = [...products.pineapples,...products.pomegranates,...products.papayas];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "seasonal-minor-fruits") {
    // Check if 'guavas','custardapples' properties exist in the products object
    if (products && products.guavas && products.custardapples) {
      filteredProducts = [...products.guavas,...products.custardapples];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "make-up") {
    // Check if 'Lips','Nails','Eyes','Facepack','makeuptools' properties exist in the products object
    if (products && products.Lips && products.Nails && products.Eyes && products.FaceMakeUp && products.MakeupToolsBrushes) {
      filteredProducts = [...products.Lips,...products.Nails,...products.Eyes,...products.FaceMakeUp,...products.MakeupToolsBrushes];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }//BagsAndLuggages
  else if (category === "BagsTravelLuggages") {
    // Bags Luggages
    if (products && products.BagsAndBackpacks && products.DuffleBags && products.TrolleysAndSuitcases && products.ShoppingAndOtherbags) {
      filteredProducts = [...products.BagsAndBackpacks, ...products.DuffleBags,...products.TrolleysAndSuitcases,...products.ShoppingAndOtherbags];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }
  else {
    // Handle other categories or render an appropriate message
    return <div>Invalid category specified.</div>;
  }
  
  filteredProducts = shuffleArray(filteredProducts);

  return (
    <Container className="product-list-container">
      <BreadCrumbs mainTitle={mainTitle} mainUrl={mainUrl} catTitle={catTitle} catUrl={catUrl}/>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.productId} xs={12} md={6} lg={4}>
            <ProductCard product={product} category={category}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
