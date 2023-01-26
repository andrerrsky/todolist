import { AppProps } from "next/app";
import { FontStyle, GlobalStyle } from "@src/styles";
import { ThemeProvider } from "styled-components";
import defaultTheme from "@src/themes";
import * as PageStyle from "./_app.style";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={defaultTheme}>
      <FontStyle />
      <GlobalStyle />
      <PageStyle.Main>
        <Component {...pageProps} />
      </PageStyle.Main>
    </ThemeProvider>
  );
};

export default App;
