import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1``;
function Header() {
  const title = "Project";
  return (
    <header>
      <Title>{title}</Title>
    </header>
  );
}
export default Header;
