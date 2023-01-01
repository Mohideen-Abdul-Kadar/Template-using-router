import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// q
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Contactus from "./pages/Contactus";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/contactus" element={<Contactus />} />
      <Route path="/product" element={<Product />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
  </BrowserRouter>
);
