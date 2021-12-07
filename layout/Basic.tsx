import { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { colors } from "../constants/styledVariables";

export const GlobalStyle = createGlobalStyle`

    // this is the shared style

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: ${colors.darkerColor};
    font-family: TlwgTypewriter;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style-type: none;
  }
  
  // anything else you would like to include
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
        <GlobalStyle />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
