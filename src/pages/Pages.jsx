import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Serached from "./Serached";
import Recipe from "./Recipe";

function Pages() {
  const getCuisine = async (name) => {
    const data = await fetch(``);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<Serached />} />
      <Route path="/recipe/:id" element={<Recipe />}></Route>
    </Routes>
  );
}

export default Pages;
