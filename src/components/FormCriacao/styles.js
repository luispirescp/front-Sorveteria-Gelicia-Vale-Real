import styled from 'styled-components';

export const FormContainer = styled.div`
  width:100%;
  margin: 49px auto;
  height:100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
