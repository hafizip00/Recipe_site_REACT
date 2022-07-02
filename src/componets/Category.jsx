import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

const Category = () => {
  return (
    <List>
      <Slink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h6>Italian</h6>
      </Slink>
      <Slink to={"/cuisine/american"}>
        <FaHamburger />
        <h6>American</h6>
      </Slink>
      <Slink to={"/cuisine/thai"}>
        <GiNoodles />
        <h6>Thai Food</h6>
      </Slink>
      <Slink to={"/cuisine/japanese"}>
        <GiChopsticks />
        <h6>Japanese</h6>
      </Slink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  transform: scale(0.8);
  h6 {
    font-size: 0.8rem;
    color: white;
  }
  svg {
    color: white;
    font-size: 1.2rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h6 {
      color: white;
    }
  }
`;
export default Category;
