import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { Container, Wrapper, ContainerList, ContainerButtons } from "./styles";

import Button from "../../components/ui/Button";
import ItemList from "./components/ItemList";
import { useCharacters } from "../../hooks/character.hook";

type ListTypes = "Todos" | "Favoritos";

export interface Character {
  name: string;
  height: string;
}

export default function Characters() {
  const [listType, setListType] = useState<ListTypes>('Todos');
  const { isLoading, paginatedCharacters, favoritesCharacters, handleGetCharacters } = useCharacters();

  function handleOnToggleListType() {
    setListType(listType === 'Todos' ? 'Favoritos' : 'Todos')
  }

  useEffect(() => {
    handleGetCharacters();
  }, []);
  
  const listCharacters = listType === 'Todos' ? paginatedCharacters.characters : favoritesCharacters;

  return (
    <Container>
      <Helmet>
        <title>Personagens</title>
      </Helmet>
      <Wrapper>
        <Button
          type="button"
          aria-label={`filtrado em ${listType}`}
          onClick={handleOnToggleListType}
        >
          {listType}
        </Button>
      </Wrapper>
      {isLoading ? (
        <span aria-busy={isLoading}>Carregando...</span>
      ) : (
      <ContainerList role="menu">
        {listCharacters.map((character) => (
          <ItemList key={character.name} character={character} />
        ))}
      </ContainerList>
      )}
      <ContainerButtons hidden={listType === 'Favoritos'}>
        <Button onClick={paginatedCharacters?.previous} disabled={isLoading || !paginatedCharacters?.previous}>Anterior</Button>
        <Button onClick={paginatedCharacters?.next} disabled={isLoading || !paginatedCharacters?.next}>Próximo</Button>
      </ContainerButtons>
    </Container>
  );
}
