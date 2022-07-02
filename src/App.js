import Pages from "./pages/Pages";
import Category from "./componets/Category";
import Search from "./componets/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Nav>
        <Home to={"/"}>
          <GiKnifeFork />
          Delicious
        </Home>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

const Home = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 200;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 1rem;
  }
`;

export default App;
