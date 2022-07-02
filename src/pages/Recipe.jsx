import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  const [steps, setSteps] = useState([]);

  const params = useParams();

  const getDetails = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const details = await data.json();
    const ing = await details.extendedIngredients;
    const steps = await details.analyzedInstructions[0].steps;
    console.log(steps);
    setSteps(steps);
    setIngredients(ing);
    setDetails(details);
  };

  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);
  return (
    <DetailWrapper>
      <div>
        <h1>{details.title}</h1>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <div>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </div>
        {activeTab === "ingredients"
          ? ingredients.map((i) => {
              return <li key={i.id}>{i.name}l</li>;
            })
          : steps.map((s) => {
              return (
                <li
                  key={s.id}
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  {s.step}
                </li>
              );
            })}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 4rem;
  display: flex;

  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    margin-top: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  li {
    font-size: 1.3rem;
    line-height: 1rem;
    padding: 0.4rem;
  }
  ul {
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 0.5rem;
  font-weight: 300;
  transition: all 450;
`;

const Info = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

export default Recipe;
