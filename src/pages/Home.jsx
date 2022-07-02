import Veggie from "../componets/Veggie";
import Populor from "../componets/Populor";
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Populor
        url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`}
        localStorageprop={"veggie"}
        title={"Our Veggies Picks"}
      />
      <Populor
        url={`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`}
        localStorageprop={"popular"}
        title={"Our Popular Picks"}
      />
    </motion.div>
  );
}

export default Home;
