import {
  faBars,
  faCartShopping,
  faList,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () =>{
    console.log("search product",searchTerm);
    navigate(`/search/${searchTerm}`);
  }
  const handleCart = ()=>{
    console.log("cart btn clicked");
    navigate('/checkout/cart');
  }
  // console.log("searchProduct",searchProduct);
  return (
    <Container fluid>
      <Row
        style={{ display: "flex", justifyContent: "space-between", margin: 20 }}
      >
        <Col style={{ display: "flex", gap: 20 }}>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <FontAwesomeIcon icon={faBars} style={{ marginTop: 5,cursor:"pointer" }} />
            <p>DailyNeeds</p>
            <p className="address" style={{ padding: " 0px 10px" }}>
              Deliver to Chennai 400020
            </p>
          </div>
        </Col>
        <Col style={{ display: "flex", gap: 20 }}>
          <div>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                backgroundColor: "#D0D3D4",
                padding: "0px 10px",
                borderRadius: 50,
              }}
            >
              <input
                type="search"
                placeholder="search product"
                style={{
                  width: 200,
                  height: 30,
                  textAlign: "center",
                  outline: "none",
                  backgroundColor: "#D0D3D4",
                  border: "none",
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} onClick={handleSearch} style={{ cursor:"pointer" }}/>
              <FontAwesomeIcon style={{ marginLeft: 10,cursor:"pointer"}} icon={faList} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                gap: 20,
                justifyContent: "center",
                padding: "0px 10px",
              }}
            >
              <FontAwesomeIcon onClick={handleCart} style={{ marginTop: 5,cursor:"pointer" }} icon={faCartShopping} />

              <button
                onClick={() => navigate("/customer/account/login")}
                style={{
                  display: "flex",
                  width: "auto",
                  height: 30,
                  gap: 10,
                  outline: "none",
                  borderRadius: "50px",
                  border: "none",
                  backgroundColor: "#D0D3D4",
                }}
              >
                <FontAwesomeIcon style={{ marginTop: 5 }} icon={faUser} />
                <p>Sign In</p>
              </button>
            </div>
          </div>
        </Col>

        {/* <Col style={{ display: "flex", gap: 20 }}>
            
              <FontAwesomeIcon icon={faCartShopping} />
              <div style={{ display: "flex"}}>
                <FontAwesomeIcon icon={faUser} />
                <p style={{  }}>Sign In</p>
              </div>
            
          </Col> */}
      </Row>
    </Container>
  );
};

export default TopHeader;
