import styled from 'styled-components';

export const FormContainer = styled.div`
  width:100%;
  height:500px;    
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 5px;

  /* Estilos para dispositivos móveis */
  @media (max-width: 467px) { 
    
    margin-top:40px;
    margin-left:5px;
    padding:3px;
    margin-bottom:15px;

    #name{
      display:flex;
      flex-wrap: nowrap | wrap | wrap-reverse;
      width:290px;
      margin-left:10px;
    }

    #image{
      display:flex;
      flex-wrap: nowrap | wrap | wrap-reverse;
      margin-left:10px;
      width:290px;
    }
    h2{
      position: relative;
      top: 2px;
      margin-bottom:19px;
      left: 45px;
    }

    img{
      position: absolute;
      top: 294px;
      left: 255px;
      width:90px;
      height:90px;      
    }

    #barcode{
      display:flex;
      flex-wrap: nowrap | wrap | wrap-reverse;
      width:200px;
      margin-left:10px;
    }
#price{
  margin:10px;
  margin-left:70px;
  width:100px;
  #price.label{
    position: relative;
    left: 10%; /* Define o ponto de referência para o centro */
    
    margin-right:30px;
  }
}

    #description{
display:flex;
      flex-wrap: nowrap | wrap | wrap-reverse;
      width: 210px;
     
    }
    #quantity{
      margin:10px;
      margin-left:20px;
      width:100px;
    }
    #salvar{
      position: relative;
      left: 10%; /* Define o ponto de referência para o centro */
      
      margin-right:30px;
    }

    #voltar{
      position: relative;
      left: 30%; /* Define o ponto de referência para o centro */      
      margin-right:30px;
    }


`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 14px;
`;

export const InputFieldCodBarra = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 14px;
`;


export const ButtonVoltar = styled.button`
padding: 10px 20px 10px;
font-size: 16px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
  background-color: #0056b3;
}
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  padding: 2px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical; /* Permite redimensionamento vertical */
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;  
  margin-right: 181px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  
`
