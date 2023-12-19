import styled from "styled-components";

export const Container = styled.aside`
position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: sticky;
  top: 0;
  padding-top: 2.5rem;
  width: fit-content;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_300};
  border-radius: 0 2rem 2rem 0;
  box-shadow: 1px 1px 30px black;

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;

      img {
        width: 64px;
        height: 24px;
        border-radius: 50%;
      }
    }
    
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      
      img {
        width: 96px;
        height: 56px;
        border-radius: 50%;
      }

      h2 {
        font-size: 1.75rem;
      }
    }
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: column;

      li {
        transition: 0.3s ease-in-out;
        
        button {
          padding: 1rem 3.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
          font-size: 1.5rem;
          font-weight: 600;
          width: 100%;
          background: transparent;
          border: none;

          svg {
            width: 24px;
            height: 24px;
          }
        }

        &:hover {
          background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_200};
          color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
        }
      }
    }

    .logout {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: none;
      padding: 1rem 0;
      border-radius: 0 0 1.5rem 0;
      background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_400};
      color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
      font-size: 1.25rem;
      font-weight: 700;
      transition: all 0.4s ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
        color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_200};
      }
    }
  }

  @media screen and (min-width: 850px) {
    display: flex;
  }
`;
