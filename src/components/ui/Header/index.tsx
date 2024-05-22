import { Container, ContainerLink } from "./styles";

import LogoImg from "./../../../assets/images/starwars-logo.png";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <NavLink to="/" title="home">
        <img src={LogoImg} alt="logo starwars" />
      </NavLink>

      <NavLink to="/characters" title="characters">
        <ContainerLink selected={pathname === '/characters'}>
          <span>PERSONAGENS</span>
          <div />
        </ContainerLink>
      </NavLink>
    </Container>
  );
}
