import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;


  .input-pesquisa{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    margin-top: 5px;
    border-radius: 5px;
  }

  .total-compras{
    position: absolute;
    margin-top: 8px;
    margin-left:410px;
  }

  .btn-pesquisar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 40px;
    position: absolute;                
    padding: 10px 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    text-align: center;
    // cursor: pointer;      
    margin-top: 8px;
    margin-left:140px;
    
  }
          

  @media screen and (min-width: 850px) {
    display: flex;
    .btn-pesquisar {
      width: 150px;
      position: absolute;                
      padding: 10px 10px;
      border: 2px solid transparent;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 5px;
      margin-left: 205px;
    }

    .total-compras{
      position: absolute;
      margin-top: 2px;
      margin-left:410px;
    }
    .total{
      font-size:20px;
      color: yellow;
      -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
        text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
        background-color: transparent; /* Fundo transparente */
    }

    
  }

  @media screen and (max-width: 450px) {
    display: flex;

    .card{
      margin-top:50px;
    }
    .btn-pesquisar {
      width: 150px;
      position: absolute;                
      padding: 10px 10px;
      border: 2px solid transparent;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 5px;
      margin-left: 205px;
    }

    .total-compras{
      position: absolute;
      margin-top: 55px;
      margin-left:5px;
    }

    .total{
      position: relative;
      margin-top: -40px;
      margin-left:165px;
      font-size:20px;
      color: yellow;
      -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
        text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
        background-color: transparent; /* Fundo transparente */
    }

   
 
    
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
  margin-left:150px;
`;


export const Content = styled.main`

width: 80vw;
  padding: 2rem;
  margin-top:10px;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: 450px) {
    padding: 1rem 3rem;    
    .input {
      display: block;
    }

    .input-pesquisa{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 40px;
      margin-top: 5px;
      border-radius: 5px;
    }

      .btn-pesquisar{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 40px;
      position: absolute;                
      padding: 10px 10px;
      border: 2px solid transparent;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      text-align: center;
      // cursor: pointer;      
      margin-top: 8px;
      margin-left: 210px;
    }

  
  }
`;
