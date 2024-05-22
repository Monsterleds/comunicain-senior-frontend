import styled from "styled-components";

export interface ContainerLinkProps {
  selected: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px ${(props) => props.theme['layout-spacing-desktop']};
  width: 100%;

  @media (max-width: ${(props) => props.theme['mobile']}) {
    padding: ${(props) => props.theme["layout-spacing-mobile"]};
  }
`;

export const ContainerLink = styled.div<ContainerLinkProps>`
  display: flex;
  flex-direction: column;

  span {
    opacity: ${(props) => props.selected ? '100%' : '70%'};
    transition: 0.2s;
  }

  div {
    width: ${(props) => props.selected ? '100%' : '0'};
    height: 2px;
    background-color: white;
    margin-top: 2px;
    transition: 0.2s;
  }

  &:hover {
    span {
      opacity: 100%;
    }

    div {
      width: 100%;
    }
  }
`;
