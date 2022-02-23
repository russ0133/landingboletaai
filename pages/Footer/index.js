import React from "react";
import { Container, Content, Text, AnimationContainer } from "./styles";
import Lottie from "react-lottie";
import Finance from "../../public/animations/rocket.json";

export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Finance,
    rendererSettings: {
      PreserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Content>
        <Text>
          <h1>ELEVE SEU A GESTÃO DOS CLIENTES PARA O PRÓXIMO NÍVEL</h1>
          <h2>AQUI VAI UM PEQUENO TEXTO</h2>
        </Text>
        <AnimationContainer>
          <Lottie options={defaultOptions} height={500} width={500} />
        </AnimationContainer>
      </Content>
    </Container>
  );
}
