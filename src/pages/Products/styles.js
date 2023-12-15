import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 850px) {
    display: flex;
  }
`;


export const Button = styled.button`
  width: 10vw;
  padding: 0.7rem;
  display: flex;
  margin: 1rem;
  flex-direction: column;
  gap: 3rem;
  border-radius: 1.5rem;
  .input {
    display: none;
  }`;


export const Content = styled.main`
  width: 90vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .input {
    display: none;
  }

  @media screen and (min-width: 450px) {
    padding: 1rem 3rem;    
    .input {
      display: block;
    }
  }
`;
