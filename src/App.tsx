import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import CharacterProvider from "./hooks/character.hook";
import { Router } from "./Router";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CharacterProvider>
            <Router />
          </CharacterProvider>
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
