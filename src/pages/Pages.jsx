import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Serached from "./Serached";
import Recipe from "./Recipe";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:search" element={<Serached />} />
        <Route path="/recipe/:id" element={<Recipe />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
