import { Container, Content, Text } from "./styles";
import Image from "next/image";

export default function Header() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>A CENTRAL DE INTELIGENCIA DO ASSESSOR</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
          <button>Quero testar</button>
        </Text>
        <Image src="/angular.png" width={500} height={500} />
      </Content>
    </Container>
  );
}
