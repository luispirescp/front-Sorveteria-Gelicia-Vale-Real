import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
 
  max-width: 900px;
  margin: 0 auto;
  margin-top:60px;
  padding: 10px;  
  border: 1px solid #ccc;
  border-radius: 5px;
  .imagem {
    display: flex;
    align-items: center;
    gap: 60px; /* Espaçamento entre o input e a imagem */
  }

  .imagem img {
    max-width: 100px; 
    padding:10px;
  }

  `;

  export const StyledLink = styled(Link)`
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

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const CustomInputField = styled.input`
  width: 400px;
  padding: -2px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 14px;
`;

export const FieldImg = styled.input`
  width: 100%;
  padding: 18px;
  margin-top:10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 14px;
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
  font-size: 16px;
  margin-right: 181px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
