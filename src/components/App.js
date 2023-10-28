import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";
import Sellers from "./Sellers";
import SellerDetails from "./SellerDetails";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="items/:itemId" element={<ItemDetails />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="sellers/:sellerId" element={<SellerDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
