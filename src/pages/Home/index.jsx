// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Aside } from "../../components/Aside";
import { InputSearch } from "../../components/InputSearch";

// Strategic Imports


// Icons Imports


export function Home() {

  return (
    <Container>
      <Header />

      <Aside />
      <Content>
        <InputSearch
          placeholder="Pesquisar produtos"
        />

        <Section title="Dashboard">

        </Section>
      </Content>
    </Container>
  );
}
