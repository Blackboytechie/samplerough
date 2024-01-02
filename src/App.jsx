import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import Home from "./pages/Home";
import SubCategory from "./pages/SubCategory";
import { premiumFruits } from "./utils/premiumfruitsdata"; //premiumfruits data
import { beauty } from "./utils/beauty"; //beauty data
import { BagsAndLuggages } from "./utils/Bags"; //BagsAndLuggages data
import MainCategory from "./pages/MainCategory";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import Cart from "./pages/Cart";

function App() {
  console.log("premiumfruits data :", premiumFruits);
  const totalProducts = Object.values(premiumFruits)
    .concat(Object.values(BagsAndLuggages))
    .concat(Object.values(beauty))
    .flat();
  console.log("total products", totalProducts);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* premiumfruits routings */}
          <Route
            path="/premiumfruits"
            element={<MainCategory products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category"
            element={<Category products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category/:subcategory"
            element={<SubCategory products={premiumFruits} />}
          />
          <Route
            path="/premiumfruits/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          {/*beauty routings */}
          <Route path="/beauty" element={<MainCategory products={beauty} />} />
          <Route
            path="/beauty/:category"
            element={<Category products={beauty} />}
          />
          <Route
            path="/beauty/:category/:subcategory"
            element={<SubCategory products={beauty} />}
          />
          <Route
            path="/beauty/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          <Route
            path="/BagsAndLuggages"
            element={<MainCategory products={BagsAndLuggages} />}
          />
          <Route
            path="/BagsAndLuggages/:category"
            element={<Category products={BagsAndLuggages} />}
          />
          <Route
            path="/BagsAndLuggages/:category/:subcategory"
            element={<SubCategory products={BagsAndLuggages} />}
          />
          <Route
            path="/BagsAndLuggages/:category/:subcategory/:product"
            element={<ProductDetail />}
          />
          {/* search */}
          <Route
            path="/search/:searchTerm"
            element={<Search products={totalProducts} />}
          />
          <Route
            path="/search/:searchTerm/:productId"
            element={<ProductDetail />}
          />

          {/* cart */}
          <Route path="/checkout/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
