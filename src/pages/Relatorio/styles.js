import styled from 'styled-components';
import { Link } from 'react-router-dom';

`.tabela-relatorio{
  background:rgba(255,255,255) repeat;
} `



export const StyledLink = styled(Link)`
padding: 10px 20px 10px;
font-size: 16px;
margin-left: 50px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
  background-color: #0056b3;
}
`;

` @media screen and (min-width: 300px) {
  .tabela-relatorio {
    width: 60vw;
  }
}

@media screen and (min-width: 700px) {
  .tabela-relatorio {
    width: 40vw;
  }
}

@media screen and (min-width: 850px) {
  display: none;
  padding: 2rem 1rem;
}`