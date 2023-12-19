import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  position: absolute;
  z-index: 1; 
  

  .menu {
    background: none;
    border: transparent;
    position: relative;
    width: 32px;
    height: 32px;
    z-index: 15;

    svg {
      width: 32px;
      height: 32px;
      
    }
  }
  
  .navbar {    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_300};
    width: fit-content;
    height: 100%;
    padding-top: 5rem;
    border-radius: 0 1.5rem 1.5rem 0;
    left: -100%;
    transition: all 0.5s ease-in-out;
    box-shadow: 1px 1px 30px black;

    .info {
      display: flex;
      align-items: center;
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
          height: 64px;
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
          height: 96px;
          border-radius: 50%;
        }

        h2 {
          font-size: 1.75rem;
        }
      }
    }
    
    li {
      
      button {
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        width: 100%;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
        font-weight: 600;
        transition: all 0.4s ease-in-out;

        svg {
          width: 24px;
          height: 24px;
        }

        &:hover {
          background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_300};
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
  
  .menu.active {
    position: fixed;
    top: 1.5rem;
  }

  .navbar.active {
    left: 0;
  }

  @media screen and (min-width: 500px) {
    .navbar {
      width: 60vw;
    }
  }

  @media screen and (min-width: 700px) {
    .navbar {
      width: 40vw;
    }
  }

  @media screen and (min-width: 850px) {
    display: none;
    padding: 2rem 1rem;
    position: absolute;
  }
`;
