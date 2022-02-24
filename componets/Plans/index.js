import React from "react";
import {
  Container,
  Content,
  Text,
  ContainerBoxers,
  Box,
  BoxBlue,
} from "./styles";
import Image from "next/image";

export default function ComoFunciona() {
  return (
    <Container>
      <Content>
        <Text>
          <h1>Comece AGORA sua jornada com BoletaAI</h1>
          <h2>
            Oferecemos <strong>3 planos</strong> com diferentes abordagens
          </h2>
        </Text>
        <ContainerBoxers>
          <Box>
            <h1>PESSOA FÍSICA</h1>
            <ul>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
            </ul>
            <p>Grátis</p>
            <button>Começar Agora</button>
          </Box>
          <BoxBlue>
            <h1>PJ (Asessor)</h1>
            <ul>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
            </ul>
            <p>R$ 97</p>
            <button>Começar Agora</button>
          </BoxBlue>
          <BoxBlue>
            <h1>PJ ILIMITADO</h1>
            <ul>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
              <li>Upload de notas em PDF (apenas 1 cpf)</li>
            </ul>
            <p>CONSULTAR</p>
            <button>Começar Agora</button>
          </BoxBlue>
        </ContainerBoxers>
      </Content>
    </Container>
  );
}
