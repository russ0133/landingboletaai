import Head from "next/head";
import Header from "../componets/Header/index";
import NextLevel from "../componets/NextLevel/index";
import ComoFunciona from "../componets/ComoFunciona/index";
import Plans from "../componets/Plans/index";
import Footer from "../componets/Footer/index";

import { GlobalStyle } from "../styles/global.js";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BoletaAI - A Central do Inteligencia do Assesor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <NextLevel></NextLevel>
      <ComoFunciona></ComoFunciona>
      <Plans></Plans>
      <Footer></Footer>
      <GlobalStyle></GlobalStyle>
    </div>
  );
}
