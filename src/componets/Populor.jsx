import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Populor({ url, localStorageprop, title }) {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem(localStorageprop);

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem(localStorageprop, JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>{title}</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1em",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2em;
`;

const Card = styled.div`
  min-height: 25rem;
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    width: 100%;
    position: absolute;
    left: 0%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 100;
    left: 50%;
    transform: translate(-50%, 100%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Populor;
