import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    max-width: 587px;
    width: 100%;
    margin-right: 8px;
  }
  
  @media (max-width: ${(props) => props.theme['mobile']}) {
    flex-direction: column;

    input {
      margin: 0px;
    }
    
    button {
      width: 100%;
      margin-top: 8px;
    }
  }
`;

export const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  margin-top: 16px;
  gap: 10px;
`;

export const ContainerButtons = styled.div`
  display: ${(props) => props.hidden ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 8px;

  button + button {
    margin-left: 8px;
  }
`;