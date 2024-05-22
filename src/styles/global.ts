import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, a, h1, button, input, strong {
        color: ${(props) => props.theme['text-primary']};
    }

    a {
        text-decoration: none;
    }

    body, input, textarea, button, a, h1, strong {
        font: 400 1rem "Alata";
        font-size: 16px;
        letter-spacing: 2px;
    }
    
    button, input {
        font: 400 1rem "Arial";
    }

    button, a {
        cursor: pointer;
    }
`;
