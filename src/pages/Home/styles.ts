import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 36px;
    line-height: 40px;
  }

  span {
    font-size: 16px;
    margin-top: 4px;
    max-width: 420px;
  }

  button {
    margin-top: 16px;
  }
`;
