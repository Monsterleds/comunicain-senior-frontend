import { ReactNode, createContext, useCallback, useContext, useState } from "react";

import { Character } from "../pages/Characters";
import { fetchWrapper } from "../configs/fetchWrapper";

interface CharacterProps {
  children: ReactNode;
}

interface CharacterContextProps {
  isLoading: boolean;
  paginatedCharacters: PaginatedCharacters;
  favoritesCharacters: Character[];
  handleGetCharacters: () => Promise<void>;
  findFavoriteCharacterByName: (character: Character) => boolean;
  handleToggleFavoriteCharacter: (character: Character) => void;
}

interface SwapiCharactersResponse {
  results: Character[];
  next?: string;
  previous?: string;
}

interface PaginatedCharacters {
  next?: () => Promise<void>;
  previous?: () => Promise<void>;
  characters: Character[];
}

const CharacterContext = createContext<CharacterContextProps>(
  {} as CharacterContextProps
);

export default function CharacterProvider({ children }: CharacterProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [paginatedCharacters, setPaginatedCharacters] = useState<PaginatedCharacters>({
    characters: [],
  });
  const [favoritesCharacters, setFavoritesCharacters] = useState<Character[]>(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem(import.meta.env.VITE_STORAGE_KEY_NAME) || ""
        )
      );
    } catch(err) {
      return [];
    }
  });

  const findFavoriteCharacterByName = useCallback((character: Character): boolean => {
    return favoritesCharacters.some(
      ({ name }) => character.name === name
    );
  }, [favoritesCharacters]);
  
  const handleGetCharacters = useCallback(async (url?: string): Promise<void> => {
    try {
      setIsLoading(true);
      
      const requestUrl = url || import.meta.env.VITE_SWAPI_BASE_URL + "/people";
      const response = await fetchWrapper<SwapiCharactersResponse>(requestUrl);
  
      setPaginatedCharacters({
        next: response?.next ? () => handleGetCharacters(response.next) : undefined,
        previous: response?.previous ? () => handleGetCharacters(response.previous) : undefined,
        characters: response.results,
      });
    } catch (error) {
      console.error(error);
      alert(
        "Ocorreu um erro ao fazer a requisição, verifique o painel de console os erros e tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  function handleToggleFavoriteCharacter(character: Character) {
    const updatedFavoriteCharacters = findFavoriteCharacterByName(character) ? favoritesCharacters.filter(({ name }) => character.name !== name) : [...favoritesCharacters, character];
    localStorage.setItem(import.meta.env.VITE_STORAGE_KEY_NAME, JSON.stringify(updatedFavoriteCharacters));
    setFavoritesCharacters(updatedFavoriteCharacters);
  }
  

  return (
    <CharacterContext.Provider
      value={{
        isLoading,
        paginatedCharacters,
        favoritesCharacters,
        handleGetCharacters,
        findFavoriteCharacterByName,
        handleToggleFavoriteCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacters() {
  const context = useContext(CharacterContext);

  return context;
}
