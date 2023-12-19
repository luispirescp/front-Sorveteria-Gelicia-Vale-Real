import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
 


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
              top: 183px;
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
              display:flex;
              flex-wrap: nowrap | wrap | wrap-reverse;
              margin:1px;
              margin-left:0px;
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
              border-radius:15px solid; 

              }
              #quantity{
              display:flex;
              flex-wrap: nowrap | wrap | wrap-reverse;
              margin:1px;
              margin-left:10px;
              margin:1px;
              margin-left:5px;  
              border-radius:15px solid; 
                 
              width:100px;
              }

              #salvar{
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
              position: relative;
              left: 10%; /* Define o ponto de referência para o centro */
              margin-top:20px;
              margin-right:130px;
              }

              #voltar{
              position: relative;
              left: 30%; /* Define o ponto de referência para o centro */      
              margin-right:10px;
              }
`;


export const StyledLink = styled(Link)`

`;

export const FormGroup = styled.div`

`;

export const CustomInputField = styled.input`

`;
export const InputField = styled.input`

`;

export const FieldImg = styled.input`

`;

export const TextAreaField = styled.textarea`

`;

export const SubmitButton = styled.button`

`;
