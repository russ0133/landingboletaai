import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --blue: #578EE1;
    --blue-hard: #014F93;

    --text-title: #8A8A8A;
    --text-body: #7B7B7B;

    --background: #F0F2F5;
    --shape: #FFFFFF;
    
    --menu: #363740;
    --link: #A4A6B3;

    --bg-client: #FBFBFB;

    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }

        @media (max-width: 380px){
            font-size: 75.5%;
        }
        height:100%;
        overflow:auto;
    }
    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
        color: var(--text-title) ;
    }

    h2{
        font-weight: 400;
        
    }`;
