import React from "react";
import { Container, Content, Text, ContainerBoxers, Box } from "./styles";
import Image from "next/image";

export default function ComoFunciona() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>Como Funciona</h1>
          <h2>CONFIRA DOS 3 PASSOS ABAIXO</h2>
        </Text>
        <ContainerBoxers>
          <Box>
            <Image src="/pdf.svg" width={80} height={80} />
            <h1>UPLOAD / ENVIO</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they{" "}
            </p>
          </Box>
          <Box>
            <Image src="/update.svg" width={80} height={80} />
            <h1>ATUALIZAR</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they{" "}
            </p>
          </Box>
          <Box>
            <Image src="/dashboard.svg" width={80} height={80} />
            <h1>CONFERIR INFORMAÇÕES</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they{" "}
            </p>
          </Box>
        </ContainerBoxers>
      </Content>
    </Container>
  );
}
