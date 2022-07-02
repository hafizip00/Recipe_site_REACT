import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Serached = () => {
  const [item, setItem] = useState([]);

  const params = useParams();
  console.log(params.search);
  const getSearch = async (search) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
    );
    const result = await data.json();
    setItem(result.results);
    console.log(result.results);
  };

  useEffect(() => {
    // getSearch(params.search);
  }, [params.search]);

  return (
    <Grid>
      {item.map((i) => {
        return (
          <Link to={"/recipe/" + i.id}>
            <Card>
              <img src={i.image} />
              <h4>{i.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Serached;
