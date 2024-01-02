import React, { useState } from "react";
// import { Navbar, Nav } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showPremiumFruitsDropdown, setshowPremiumFruitsDropdown] =
  useState(false);
const [showApplePearsDropdown, setShowApplePearsDropdown] = useState(false);
const [showAvacadoPeachPlumDropdown,setShowAvacadoPeachPlumDropdown] = useState(false);
const [showBananaMelonCoconutDropdown,setShowBananaMelonCoconutDropdown] = useState(false);
const [showCherriesBerriesExoticDropdown,setShowCherriesBerriesExoticDropdown] = useState(false);
const [showCitrusMangoGrapeDropdown,setShowCitrusMangoGrapeDropdown] = useState(false);
const [showWetDatesDropdown,setShowWetDatesDropdown] = useState(false);
const [showGiftPackDropdown,setShowGiftPackDropdown] = useState(false);
const [showPomegranatePapayaPineappleDropdown,setShowPomegranatePapayaPineappleDropdown] = useState(false);
const [showSeasonalMinorFruitsDropdown,setShowSeasonalMinorFruitsDropdown] = useState(false);
//beauty state
const [showBeautyDropdown, setshowBeautyDropdown] = useState(false);
const [showMakeUpDropdown, setShowMakeUpDropdown] = useState(false);
//BagsLuggage state
const [showBagsLugsDropdown, setshowBagsLugsDropdown] = useState(false);



const handleBagsLugsMouseLeave = () => {
  setshowBagsLugsDropdown(false);
};




const handlePremiumFruitsMouseEnter = () => {
  setshowPremiumFruitsDropdown(true);
};

const handlePremiumFruitsMouseLeave = () => {
  setshowPremiumFruitsDropdown(false);
};
//for apples-pears
const handleApplePearsMouseEnter = () => {
  setShowApplePearsDropdown(true);
};

const handleApplePearsMouseLeave = () => {
  setShowApplePearsDropdown(false);
};
 //for avacado-peach-plum
 const handleAvacadoPeachPlumMouseEnter = () => {
  setShowAvacadoPeachPlumDropdown(true);
};

const handleAvacadoPeachPlumMouseLeave = () => {
  setShowAvacadoPeachPlumDropdown(false);
};
 //for bananas-melons-coconut
 const handleBananaMelonCoconutMouseEnter = () => {
  setShowBananaMelonCoconutDropdown(true);
};

const handleBananaMelonCoconutMouseLeave = () => {
  setShowBananaMelonCoconutDropdown(false);
};

//for cherries-berries-dragonfruits
const handleCherriesBerriesExoticMouseEnter = () => {
  setShowCherriesBerriesExoticDropdown(true);
};

const handleCherriesBerriesExoticMouseLeave = () => {
  setShowCherriesBerriesExoticDropdown(false);
};

 //for citrus-mangos-grapes
 const handleCitrusMangoGrapeMouseEnter = () => {
  setShowCitrusMangoGrapeDropdown(true);
};

const handleCitrusMangoGrapeMouseLeave = () => {
  setShowCitrusMangoGrapeDropdown(false);
};

  //for dates
  const handleWetDatesMouseEnter = () => {
    setShowWetDatesDropdown(true);
  };

  const handleWetDatesMouseLeave = () => {
    setShowWetDatesDropdown(false);
  };
  
  //for gift packs
  const handleGiftPackMouseEnter = () => {
    setShowGiftPackDropdown(true);
  };

  const handleGiftPackMouseLeave = () => {
    setShowGiftPackDropdown(false);
  };
  
  //for pomegranate-papayas-pineapple
  const handlePomegranatePapayaPineappleMouseEnter = () => {
    setShowPomegranatePapayaPineappleDropdown(true);
  };

  const handlePomegranatePapayaPineappleMouseLeave = () => {
    setShowPomegranatePapayaPineappleDropdown(false);
  };
  
  //for seasonal-minor-fruits
  const handleSeasonalMinorFruitsMouseEnter = () => {
    setShowSeasonalMinorFruitsDropdown(true);
  };

  const handleSeasonalMinorFruitsMouseLeave = () => {
    setShowSeasonalMinorFruitsDropdown(false);
  };

  //beauty
const handleBeautyMouseEnter = () => {
  setshowBeautyDropdown(true);
};
const handleBeautyMouseLeave = () => {
  setshowBeautyDropdown(false);
};
//for Makeup
const handleMakeUpMouseEnter = () => {
  setShowMakeUpDropdown(true);
};
const handleMakeUpMouseLeave = () => {
  setShowMakeUpDropdown(false);
};
//BagsLuggages
const handleBagsLugsMouseEnter = () => {
  setshowBagsLugsDropdown(true);
};
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" navbarScroll>
            <NavDropdown
              show={showPremiumFruitsDropdown}
              onMouseEnter={handlePremiumFruitsMouseEnter}
              onMouseLeave={handlePremiumFruitsMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/apples-pears"}
                onMouseEnter={handleApplePearsMouseEnter}
                onMouseLeave={handleApplePearsMouseLeave}
              >
                Apple & Pears
              </NavDropdown.Item>
              {showApplePearsDropdown && (
                <>
                <Container show={showApplePearsDropdown}  onMouseEnter={handleApplePearsMouseEnter}
                onMouseLeave={handleApplePearsMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/apples-pears/apples">
                    Apples
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/apples-pears/pears">
                    Pears
                  </NavDropdown.Item>
                  </Container>
                </>
              )}

              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/avacado-peach-plum"}
                onMouseEnter={handleAvacadoPeachPlumMouseEnter}
                onMouseLeave={handleAvacadoPeachPlumMouseLeave}
              >
                Avacados-Peaches-Plum
              </NavDropdown.Item>
              {showAvacadoPeachPlumDropdown && (
                <>
                <Container show={showAvacadoPeachPlumDropdown}  onMouseEnter={handleAvacadoPeachPlumMouseEnter}
                onMouseLeave={handleAvacadoPeachPlumMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/avacado-peach-plum/avacados">
                    Avacados
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/avacado-peach-plum/peaches">
                    Peaches
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/avacado-peach-plum/nectarines">
                    Nectarines
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/banana-melons-coconut"}
                onMouseEnter={handleBananaMelonCoconutMouseEnter}
                onMouseLeave={handleBananaMelonCoconutMouseLeave}
              >
                banana-melons-coconut
              </NavDropdown.Item>
              {showBananaMelonCoconutDropdown && (
                <>
                <Container show={showBananaMelonCoconutDropdown}  onMouseEnter={handleBananaMelonCoconutMouseEnter}
                onMouseLeave={handleBananaMelonCoconutMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/banana-melons-coconut/bananas">
                    Bananas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/banana-melons-coconut/melons">
                    Melons
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/banana-melons-coconut/coconuts">
                    Coconuts
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/cherries-berries-exotic-fruits"}
                onMouseEnter={handleCherriesBerriesExoticMouseEnter}
                onMouseLeave={handleCherriesBerriesExoticMouseLeave}
              >
                cherries-berries-exotic-fruits
              </NavDropdown.Item>
              {showCherriesBerriesExoticDropdown && (
                <>
                <Container show={showCherriesBerriesExoticDropdown}  onMouseEnter={handleCherriesBerriesExoticMouseEnter}
                onMouseLeave={handleCherriesBerriesExoticMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/cherries-berries-exotic-fruits/cherries">
                    Cherries
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/cherries-berries-exotic-fruits/berries">
                    Berries
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/cherries-berries-exotic-fruits/dragonfruits">
                    Dragon Fruits
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/citrus-mango-grapes"}
                onMouseEnter={handleCitrusMangoGrapeMouseEnter}
                onMouseLeave={handleCitrusMangoGrapeMouseLeave}
              >
                citrus-mango-grapes
              </NavDropdown.Item>
              {showCitrusMangoGrapeDropdown && (
                <>
                <Container show={showCitrusMangoGrapeDropdown}  onMouseEnter={handleCitrusMangoGrapeMouseEnter}
                onMouseLeave={handleCitrusMangoGrapeMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/citrus-mango-grapes/citrus">
                    Citrus
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/citrus-mango-grapes/mangos">
                    Mangos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/citrus-mango-grapes/grapes">
                    Grapes
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item as={Link} to={"/premiumfruits/dates"} onMouseEnter={handleWetDatesMouseEnter}
                onMouseLeave={handleWetDatesMouseLeave}>
                dates
              </NavDropdown.Item>
              {showWetDatesDropdown && (
                <>
                <Container show={showWetDatesDropdown}  onMouseEnter={handleWetDatesMouseEnter}
                onMouseLeave={handleWetDatesMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/dates/wetdates">
                    Wet Dates
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/gift-assorted-xl-packs"}
                onMouseEnter={handleGiftPackMouseEnter}
                onMouseLeave={handleGiftPackMouseLeave}
              >
                gift-assorted-xl-packs
              </NavDropdown.Item>
              {showGiftPackDropdown && (
                <>
                <Container show={showGiftPackDropdown}  onMouseEnter={handleGiftPackMouseEnter}
                onMouseLeave={handleGiftPackMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/gift-assorted-xl-packs/giftpacks">
                    Gifts Pack
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/pomegranate-papaya-pineapple"}
                onMouseEnter={handlePomegranatePapayaPineappleMouseEnter}
                onMouseLeave={handlePomegranatePapayaPineappleMouseLeave}
              >
                pomegranate-papaya-pineapple
              </NavDropdown.Item>
              {showPomegranatePapayaPineappleDropdown && (
                <>
                <Container show={showPomegranatePapayaPineappleDropdown}  onMouseEnter={handlePomegranatePapayaPineappleMouseEnter}
                onMouseLeave={handlePomegranatePapayaPineappleMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/pomegranate-papaya-pineapple/pomegranates">
                    Pomegranates
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/pomegranate-papaya-pineapple/papayas">
                    Papayas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/pomegranate-papaya-pineapple/pineapples">
                    Pineapples
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/seasonal-minor-fruits"}
                onMouseEnter={handleSeasonalMinorFruitsMouseEnter}
                onMouseLeave={handleSeasonalMinorFruitsMouseLeave}
              >
                seasonal-minor-fruits
              </NavDropdown.Item>
              {showSeasonalMinorFruitsDropdown && (
                <>
                <Container show={showSeasonalMinorFruitsDropdown}  onMouseEnter={handleSeasonalMinorFruitsMouseEnter}
                onMouseLeave={handleSeasonalMinorFruitsMouseLeave}>
                  <NavDropdown.Item href="/premiumfruits/seasonal-minor-fruits/guavas">
                    Guava
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/premiumfruits/seasonal-minor-fruits/custardapples">
                    Custard Apples
                  </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>
            <Nav.Link
              as={Link}
              to={"/premiumfruits"}
              onMouseEnter={handlePremiumFruitsMouseEnter}
              onMouseLeave={handlePremiumFruitsMouseLeave}
            >
              Premium Fruits
            </Nav.Link>
            {/* beauty dropdown */}
            <NavDropdown
              show={showBeautyDropdown}
              onMouseEnter={handleBeautyMouseEnter}
              onMouseLeave={handleBeautyMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/Beauty/make-up"}
                onMouseEnter={handleMakeUpMouseEnter}
                onMouseLeave={handleMakeUpMouseLeave}
              >
                Make-Up
              </NavDropdown.Item>
              {showMakeUpDropdown && (
                <>
                  <Container
                    show={showMakeUpDropdown}
                    onMouseEnter={handleMakeUpMouseEnter}
                    onMouseLeave={handleMakeUpMouseLeave}
                  >
                    <NavDropdown.Item href="/beauty/make-up/Lips">
                      Lips
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/beauty/make-up/Nails">
                      Nails
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/beauty/make-up/Eyes">
                      Eyes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/beauty/make-up/FaceMakeUp">
                      FaceMakeUp
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/beauty/make-up/MakeupToolsBrushes">
                      MakeupToolsBrushes
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>
            <Nav.Link
              as={Link}
              to={"/beauty"}
              onMouseEnter={handleBeautyMouseEnter}
              onMouseLeave={handleBeautyMouseLeave}
            >
              Beauty
            </Nav.Link>
            <NavDropdown
              show={showBagsLugsDropdown}
              onMouseEnter={handleBagsLugsMouseEnter}
              onMouseLeave={handleBagsLugsMouseLeave}
            >
              
              <NavDropdown.Item
                as={Link}
                to={"/BagsAndLuggages/BagsAndLuggages/BagsAndBackpacks"}
                
              >
                Bags & Backpacks
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/BagsAndLuggages/BagsAndLuggages/DoffleBags"}
                
              >
                DoffleBags
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/BagsAndLuggages/BagsAndLuggages/TrollyseAndSuitcase"}
                
              >
                Trolleys & Suitcases
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/BagsAndLuggages/BagsAndLuggages/ShoppingbagsAndOtherbags"}
                
              >
                Shopping Bags & OtherBags
              </NavDropdown.Item>
              


             </NavDropdown>
            <Nav.Link
              as={Link}
              to={"/BagsAndLuggages"}
              onMouseEnter={handleBagsLugsMouseEnter}
              onMouseLeave={handleBagsLugsMouseLeave}
            >
              Bags & Luggages
            </Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
