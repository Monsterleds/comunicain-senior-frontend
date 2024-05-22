import styled from "styled-components";

import bgImg from "./../../assets/images/starwars-bg.png";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export const LayoutContent = styled.div`
  padding: ${(props) => props.theme["layout-spacing-desktop"]};
  
  @media (max-width: ${(props) => props.theme['mobile']}) {
    padding: ${(props) => props.theme["layout-spacing-mobile"]};
  }
`;
