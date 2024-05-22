import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Container } from "./styles";

import Button from "../../components/ui/Button";

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>Início</title>
      </Helmet>
      <h1>QUE A FORÇA<br></br>ESTEJA COM VOCÊ</h1>
      <span>
        Encontre seus personagens favoritos entre os 82 personagens do universo
        de star wars
      </span>
      <NavLink to="/characters" title="characters">
        <Button>Ver personagens</Button>
      </NavLink>
    </Container>
  );
}
