import { Container, Content, Top, Menu } from "./styles";
import Image from "next/image";
import ContentHeader from "../ContentHeader";

export default function Header() {
  return (
    <Container>
      <Content>
        <Top>
          <Image src="/logo.svg" width={250} height={100} />
          <Menu>
            <ul>
              <li>Home</li>
              <li>Sobre Nós</li>
              <li>Como Funciona</li>
              <li>Preços</li>
              <li>
                <a href="http://app.boleta.ai/">Login APP</a>
              </li>
            </ul>
          </Menu>
        </Top>
        <ContentHeader></ContentHeader>
      </Content>
    </Container>
  );
}
