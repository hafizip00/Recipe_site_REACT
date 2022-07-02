import Veggie from "../componets/Veggie";
import Populor from "../componets/Populor";
import React from "react";

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
