import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  height: 56px;
  padding: 0 36px;
  background-color: ${(props) => props.theme["primary"]};
  border-radius: ${(props) => props.theme["spacing-8"]};
  border: 1px solid ${(props) => props.theme["secondary"]};
  transition: 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 60%;
  }
`;
