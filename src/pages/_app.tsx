import React, { ComponentType } from "react";
import type { AppProps } from "next/app";
import { createTheme } from "../globals/configs/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useNProgress } from "../globals/hooks/useNProgress";
import { BaseContext, NextPageContext } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import createEmotionCache from "../globals/configs/mui/createEmotionCache";
// import { ToastContainer } from "react-toastify";
// import * as fbq from "../lib/fpixel";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

export type CustomNextComponentType<
  Context extends BaseContext = NextPageContext,
  InitialProps = {},
  Props = {}
> = ComponentType<Props> & {
  getInitialProps?(context: Context): InitialProps | Promise<InitialProps>;
  getLayout: (c: React.JSX.Element) => React.JSX.Element;
};

interface CustomAppProps extends Omit<AppProps, "Component"> {
  emotionCache: EmotionCache;
  Component: CustomNextComponentType<NextPageContext, any, any>;
}

export default function App(props: CustomAppProps) {
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const theme = createTheme();
  const getLayout = Component.getLayout ?? ((page: React.JSX.Element) => page);

  // useEffect(() => {
  //   // This pageview only triggers the first time (it's important for Pixel to have real information)
  //   fbq.pageview();
  //   const handleRouteChange = () => fbq.pageview();

  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
        {/* <ToastContainer /> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
