import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');
  html {
    font-family: 'Poppins', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #eff4f7;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  
  @media (max-width: 940px) {
    .mobile-hide {
      display: none;
    }
  }
  @keyframes fadein {
    from {
      background-color: transparent;
    }
    to {
      background-color: #ffffff;
    }
  }
  
  @keyframes fadeout {
    from {
      background-color: #ffffff;
    }
    to {
      background-color: transparent;
    }
  }
  @keyframes slidein {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }
  
  @keyframes slideout {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }
`;

export default GlobalStyles;
