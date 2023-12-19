import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  

  .total {
    position: absolute;
    margin-top:20px;
    width: 10px;
    font-size:18px;
  }

  .cards {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    margin-right:20px;
    gap: 1rem;

    .btn-pesquisar {
      position: absolute;
      margin-top:120px;
      width: 10px;
      margin-left:40px;
      font-size:18px;
    }

    .input-pesquisa{
      position:relative;
      margin-top:200px;
      margin-left:50px;
    }
    
    
    .card {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 300px;
      max-width:300px;
      min-width:300px;
      height: 380px;
      padding:5px;
      background: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_300};
      color: ${({ theme }) => theme.COLORS.SWATCH.SWATCH_100};
      border: 2px solid ${({ theme }) => theme.COLORS.SWATCH.SWATCH_400};
      border-radius: 0.5rem;
  

      .total {
        position: absolute;
        margin-top:20px;
        width: 10px;
        font-size:18px;
      }

      .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .name{      
        position:absolute;
        padding:10px;
        width:250px;                        
        color: #228B22	; /* Cor do texto */
        -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
        text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
        background-color: transparent; /* Fundo transparente */
      } 

      .imagem{  
        position:relative;    
        width:150px;  
        height:150px;       
        margin-top:86px;
        margin-right:50px;
        border-radius:8px;
        transition: transform 0.3s ease;
        box-shadow: 20px 14px 18px rgba(1, 0, 0, 0.4); /* Adiciona uma sombra suave */

        
        }

        .price{
          display: flex;
          flex-direction: column;
          font-size:27px;
          margin-left: 2px;
          position:absolute;
          margin-top:243px;
          color: #8B4513	; /* Cor do texto */
          -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
          text-stroke: 2px #8B4513; /* Largura e cor da borda para navegadores padrão */
          background-color: transparent; /* Fundo transparente */
        }

        .comprar{
          position: absolute;
          margin-top:60px;
          color: #8B4513;
          bold: true;
          font-weight: bold;
        }
      
        .checkbox-label{                       
          position: absolute;
          padding: 2px; 
          // width: 28%;
          // height: 5%;
          position:absolute;
          margin-top:225px;                        
          margin-left:170px;
        }
        .checkbox{
          position: absolute;
          width:20px;          
          color: #0056b3;
          margin-top:5px;                        
          margin-left:75px;
          
        }

        .estock{
          color: #D2691E	;
          -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
          text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
          background-color: transparent; /* Fundo transparente */
          position: absolute;
          margin-left:190px;
          margin-top:310px;
        }

        .editar {
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
          margin-top: 290px;
          margin-bottom:10px;          
        }
        
        .editar:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }

      
   

        .productName {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; /* Isso irá adicionar reticências (...) caso o texto ultrapasse o contêiner */
          /* Outros estilos, se necessário */
        }
      
      }
    }
    @media (max-width: 568px) {
            .card {                   
                    diplay flex;                   
                    padding-top:7px;
                    padding-bottom:15px;

                      .name{      
                        position:absolute;
                        padding:10px;
                        width:250px;                        
                        color: #228B22	; /* Cor do texto */
                        -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
                        text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
                        background-color: transparent; /* Fundo transparente */
                      }     
                                      
                      
                      
                      .price{
                        display: flex;
                        flex-direction: column;
                        font-size:27px;
                        margin-left: 2px;
                        position:absolute;
                        margin-top:243px;
                        color: #8B4513	; /* Cor do texto */
                        -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
                        text-stroke: 2px #8B4513; /* Largura e cor da borda para navegadores padrão */
                        background-color: transparent; /* Fundo transparente */
                      }
                     
                      .editar {
                        width: 250px;
                        position: absolute;
                        margin-top: 290px;
                        
                        padding: 10px 10px;
                        border: 2px solid transparent;
                        border-radius: 5px;
                        background-color: #007bff;
                        color: white;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                      }
                      
                      .editar:hover {
                        background-color: #0056b3;
                        border-color: #0056b3;
                      }
                      .comprar{
                        position: absolute;
                        margin-top:90px;
                        color: #8B4513;
                        bold: true;
                        font-weight: bold;
                      }
                    
                      .checkbox-label{                       
                        position: absolute;
                        padding: 2px; 
                        width: 28%;
                        height: 5%;
                        position:absolute;
                        margin-top:155px;                        
                        margin-left:180px;
                      }

                      .checkbox{
                        width:20px;
                        padding:20px;
                        color: #0056b3;
                        margin-left:10px;
                        
                      }

                      .estock{
                        color: #D2691E	;
                        -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
                        text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
                        background-color: transparent; /* Fundo transparente */
                        position: absolute;
                        margin-left:180px;
                        margin-top:300px;
                      }

                      .imagem{  
                      position:relative;    
                      width:150px;  
                      height:150px;       
                      margin-top:86px;
                      margin-right:50px;
                      border-radius:8px;
                      transition: transform 0.3s ease;
                      box-shadow: 20px 14px 18px rgba(1, 0, 0, 0.4); /* Adiciona uma sombra suave */
  
                      
                      }

                      .input-pesquisa{
                        position:relative;
                        margin-top:200px;
                        margin-left:50px;
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

  
`;
