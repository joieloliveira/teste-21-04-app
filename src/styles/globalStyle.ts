import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }
    @media (max-width: 768px) {
        font-size: 80%;
    }
    @media (max-width: 375px) {
        font-size: 70%;
    }
}

body {
    background: #F8F7FC;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button { 
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

:root {
    --ContenWdt: 1140px;
  }
`