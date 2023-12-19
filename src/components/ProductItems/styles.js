import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;

  .cards {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    gap: 2rem;

    .imagem {
      position: relative;
      margin-top:190px;
      width: 120px;
      height: 120px;

    }
    .price{
     
      color: #fff; /* Cor do texto */
      -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
      text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
      background-color: transparent; /* Fundo transparente */
    }

    .name{      
      padding:10px;
      color: #fff; /* Cor do texto */
      -webkit-text-stroke: 1px #000; /* Largura e cor da borda para navegadores WebKit */
      text-stroke: 1px #000; /* Largura e cor da borda para navegadores padrão */
      background-color: transparent; /* Fundo transparente */
    }
   
    .card {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 300px;
     
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
  
        // div {
        //   display: flex;
        //   flex-direction: column;
        // }

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
                    width: 600px;
                    max-width:600;
                    min-width:300px;
                    diplay flex;
                    padding-left:1;
                    padding-right:1;
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
                                      
                      }
                      
                      .price{
                        display: flex;
                        flex-direction: column;
                        font-size:27px;
                        
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
