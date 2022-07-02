import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Content>
      <h1>No Content Available</h1>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;

export default NotFound;
