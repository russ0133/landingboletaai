import Head from "next/head";
import Header from "./Header/index";
import NextLevel from "./NextLevel/index";
import ComoFunciona from "./ComoFunciona/index";
import Plans from "./Plans/index";
import Footer from "./Footer/index";

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
