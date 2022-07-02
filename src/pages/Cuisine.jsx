import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Cuisine = () => {
  const [cuisine, setCusine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const check = localStorage.getItem(params.type);
    if (check) {
      setCusine(JSON.parse(check));
    } else {
      const cuisine = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      const data = await cuisine.json();
      setCusine(data.results);
      console.log(data.results);
      localStorage.setItem(params.type, JSON.stringify(data.results));
    }
  };
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div>
      {cuisine.length <= 0 && <NotFound />}
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cuisine.map((item) => (
          <Link to={"/recipe/" + item.id}>
            <Card key={item.key}>
              <img src={item.image} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
