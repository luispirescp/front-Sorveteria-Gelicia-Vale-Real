import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 850px) {
    display: flex;
  }
`;

export const Content = styled.main`
  width: 100vw;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: scroll;

  .input {
    display: none;
  }

  @media screen and (min-width: 850px) {
    .input {
      display: block;
    }
  }
`;
