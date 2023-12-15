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
      width: 79px;
      height: 80%;
      border-radius: 0.5rem;
      background-position: center;
      background-size: contain;
    }

    .card {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 600px;
      max-width: 600px;
      height: 360px;
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
        .input-search {
          /* Adicione os estilos desejados para o input */
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 8px;
        }
        .checkbox-label{
          display: flex;
          align-items: center;
          justify-content: center;
          padding:3px;
          width: 100%;
          height:15%;
          background-color: #B0E0E6;
          margin-start: 58px;
        }

        .productName {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; /* Isso irá adicionar reticências (...) caso o texto ultrapasse o contêiner */
          /* Outros estilos, se necessário */
        }
        .button-search {
          /* Adicione os estilos desejados para o botão */
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button {
          background: transparent;
          border: none;
          width: 70%;
          height:20%;
          margin-top:10%;
          border-radius: 0.5rem;
          padding: 0.4rem;
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
        .estock {
          color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
          font-weight: 500;
        }
        .price {
          color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
          font-weight: 500;
          font-size:25px;
        }
      }
    }
  }
  return (
    <Container className="input">
      {Icon && <FiSearch size={24} />}
      <input {...rest}>{title}</input>
    </Container>
  );
}

  @media screen and (min-width: 450px) {    
    .cards .card {
      max-width: 540px;
    }
  }

  @media screen and (min-width: 1440px) {
    .card {
      max-width: 520px;
    }
  }
`;
