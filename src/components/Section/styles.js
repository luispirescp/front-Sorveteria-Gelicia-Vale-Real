import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    font-family: 'Poppins';
    line-height: 1.5rem;
    color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 850px) {
    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.75rem;
    }
  }
  @media screen and (min-width: 450px) {
    h1 {
      font-size: 2rem;
      font-weight: 100;
      width: 40%;
      line-height: 2.75rem;
    }
  }
`;
