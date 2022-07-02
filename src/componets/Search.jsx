import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState();
  const navigiate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    navigiate("/search/" + search);
  };

  return (
    <FormStyle onSubmit={submithandler}>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 0.8rem 2.4rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
