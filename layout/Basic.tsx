import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    // this is the shared style


  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
