import { Container } from "./styles";

import { Character } from "../..";
import unfilledStar from "./../../../../assets/icons/unfilled-star.svg";
import filledStar from "./../../../../assets/icons/filled-star.svg";
import { useCharacters } from "../../../../hooks/character.hook";

interface ItemListAttributes {
  character: Character;
}

export default function ItemList({ character }: ItemListAttributes) {
  const { handleToggleFavoriteCharacter, findFavoriteCharacterByName } = useCharacters();

  const characterHeight = +character.height / 100;

  const isFavorite = findFavoriteCharacterByName(character);

  return (
    <Container role="menuitem">
      <div>
        <div>
          <strong>{character.name}</strong>
          <span aria-label={characterHeight + "metros"}>
            {isNaN(characterHeight) ? 'Desconhecido' : `${characterHeight}m`}
          </span>
        </div>
        <button aria-label={`${isFavorite ? 'desfavoritar' : 'favoritar'} personagem`} onClick={() => handleToggleFavoriteCharacter(character)}>
          <img src={isFavorite ? filledStar : unfilledStar} alt="estrela" aria-hidden="true" />
        </button>
      </div>
    </Container>
  );
}
