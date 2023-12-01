// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { ProductItems } from "../../components/ProductItems";
import { Aside } from "../../components/Aside";
import { InputSearch } from "../../components/InputSearch";

// Strategic Imports
import { useState } from "react";

export function Products() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
    console.log(search);
  }

  return (
    <Container>
      <Header />

      <Aside />
      <Content>
        <InputSearch 
          placeholder="Pesquisar produtos"
          onChange={handleSearch}
        />

        <ProductItems searchValue={search} />
      </Content>
    </Container>
  );
}
