import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['primary']};
  width: 100%;
  padding: 16px;
  border-radius: ${(props) => props.theme['radius-md']};
  transition: 0.2s;
  
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    div {
      display: flex;
      flex-direction: column;
  
      strong {
        font-size: 18px;
      }
  
      span {
        margin-top: 4px;
        font-size: 14px;
        color: ${(props) => props.theme['text-secondary']};
      }
    }
  
    button {
      background: transparent;
      border: 0;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme['secondary']};
  }
`;