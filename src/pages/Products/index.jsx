import { useState } from "react";
import { searchProductByName } from "../../services/api";
import { Header } from "../../components/Header";
import { ProductItems } from "../../components/ProductItems";
import { Aside } from "../../components/Aside";
import { InputSearch } from "../../components/InputSearch";
import { Container, Content, Button } from "./styles";
import {Section} from "../../components/Section";
import { useNavigate } from "react-router-dom";


export function Products() {
  // Estado para armazenar o termo de busca
  const [search, setSearch] = useState("");
  // Estado para armazenar os resultados da pesquisa
  const [searchResults, setSearchResults] = useState([]);
  

  // Atualiza o estado 'search' com o valor do input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
      <Container>
        <Header />
        <Aside />
        <Content>
          {/* Componente de input para buscar produtos */}
       

          {/* Componente para mostrar os resultados da busca */}
          <ProductItems searchValue={searchResults} />
        </Content>
      </Container>
  );
}
