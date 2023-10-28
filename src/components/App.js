import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="items/:itemId" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
