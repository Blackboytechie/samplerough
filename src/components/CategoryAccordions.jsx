import React, { useEffect ,useState} from 'react';
import { Accordion } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const CategoryAccordions = ({mainCategories,categoriesByMainCategory,subcategoriesByCategory}) => {
    const { pathname } = useLocation();
    const [activeMainCategory, setActiveMainCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    // Parse the URL path segments
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    console.log("pathsegments", pathSegments);
    // Set active categories based on path segments
    if (pathSegments.length >= 1) {
      setActiveMainCategory(pathSegments[0]);
    }
    if (pathSegments.length >= 2) {
      setActiveCategory(pathSegments[1]);
    }
  }, [location.pathname]);
  const handleMainCategorySelect = (mainCategory) => {
    setActiveMainCategory(mainCategory);
    setActiveCategory(null); // Reset activeCategory when main category changes
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  
  // Determine the current category based on the path (replace with your logic)
  return (
    <Accordion activeKey={activeMainCategory}>
            {mainCategories.map((mainCategory) => (
              <Accordion.Item key={mainCategory} eventKey={mainCategory}>
                <Accordion.Header
                  onClick={() => handleMainCategorySelect(mainCategory)}
                >
                  {mainCategory}
                </Accordion.Header>
                <Accordion.Body>
                  {categoriesByMainCategory[mainCategory].map((category) => (
                    <Accordion key={category}>
                      <Accordion.Item eventKey={category}>
                        <Accordion.Header
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </Accordion.Header>
                        <Accordion.Body>
                          {subcategoriesByCategory[category].map(
                            (subcategory) => (
                              <p key={subcategory}>{subcategory}</p>
                            )
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
  )
}

export default CategoryAccordions