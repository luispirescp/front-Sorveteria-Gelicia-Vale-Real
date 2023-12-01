import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .cards {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    gap: 2rem;

    img {
      width: 96px;
      height: 100%;
      border-radius: 0.5rem;
      background-position: center;
      background-size: contain;
    }

    .card {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 100%;
      max-width: 300px;
      height: 200px;
      padding: 1rem;
      background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_300};
      color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
      border: 2px solid ${({ theme }) => theme.COLORS.SWATCH.SWATCH_400};
      border-radius: 0.5rem;
  
      .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
  
        div {
          display: flex;
          flex-direction: column;
        }
  
        button {
          background: transparent;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem;
          background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_200};
          color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.4s ease-in-out;
  
          &:hover {
            background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_400};
            color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_200};
          }
        }
  
        .price {
          color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
          font-weight: 700;
        }
      }
    }
  }

  @media screen and (min-width: 850px) {
    
    .cards .card {
      max-width: 280px;
    }
  }

  @media screen and (min-width: 1440px) {
    .card {
      max-width: 320px;
    }
  }
`;
