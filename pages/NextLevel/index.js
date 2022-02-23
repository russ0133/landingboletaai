import React from "react";
import { Container, Content, Text, AnimationContainer } from "./styles";
import Lottie from "react-lottie";
import Finance from "../../public/animations/finance.json";

export default function NextLevel() {
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
          <h1>Sua gestão de clientes no próximo nível</h1>
          <h2>AQUI VAI UM PEQUENO TEXTO</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics
          </p>
          <button>Quero testar</button>
        </Text>
        <AnimationContainer>
          <Lottie options={defaultOptions} height={500} width={500} />
        </AnimationContainer>
      </Content>
    </Container>
  );
}
