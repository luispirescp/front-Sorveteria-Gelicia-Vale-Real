import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 850px) {
    display: flex;
  }
`;

export const Content = styled.main`
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .input {
    display: none;
  }

  @media screen and (max-width: 850px) {
 
  }

  @media screen and (min-width: 450px) {
 
  }
`;