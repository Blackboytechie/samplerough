import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Breadcrumb} from "react-bootstrap";
import { useLocation ,Link} from "react-router-dom";

const BreadCrumbs = ({mainTitle,mainUrl,catTitle,catUrl,subcatTitle,subcatUrl}) => {
    console.log("main",mainTitle);
    console.log("main",mainUrl);
    console.log("catTitle",catTitle);
    console.log("catUrl",catUrl);
    console.log("subcatTitle",subcatTitle);
    console.log("subcatUrl",subcatUrl);
//   const { pathname } = useLocation();
//   console.log("pathname :", pathname);
//   const breadcrumbsItem = pathname.split("/");
//   console.log("breadCrumbs :", breadcrumbsItem);
  return (
    <Breadcrumb >
    
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="text-decoration-none">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/allcategory" }} className="text-decoration-none">
        All Categories
      </Breadcrumb.Item>
      {mainTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${mainUrl}` }} className="text-decoration-none">
        {mainTitle}
      </Breadcrumb.Item>}
      {catTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${catUrl}` }} className="text-decoration-none">
        {catTitle}
      </Breadcrumb.Item>}
      {subcatTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${subcatUrl}` }} className="text-decoration-none">
        {subcatTitle}
      </Breadcrumb.Item>}
      {/* {breadcrumbsItem.map(
        (item, index) =>
          item && (
            <Breadcrumb.Item
              key={index}
              href="/beauty"
              linkAs={Link} linkProps={{ to: `/${item}` }}
              className="text-decoration-none"
            >
              {item}
            </Breadcrumb.Item>
          )
      )} */}
    </Breadcrumb>
    // <div >
    //     <ul >
    //         <li>Home</li>
    //         <li>Allcategory</li>
    //         <li>lol</li>
    //     </ul>
    // </div>
  );
};

export default BreadCrumbs;
