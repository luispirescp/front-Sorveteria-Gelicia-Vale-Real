// Styling Imports
import { Container, Content } from "./styles";
// Components Imports
import { Header } from "../../components/Header";
import { Aside } from "../../components/Aside";


export function Config() {


  return (
    
    <Container>
      <Aside/>
      <Header />

      
      <Content>
        Configurações
      </Content>
    </Container>
  );
}
