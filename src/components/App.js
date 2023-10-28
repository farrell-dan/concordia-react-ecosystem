//src/components/App.js


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const App = (props) => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;
