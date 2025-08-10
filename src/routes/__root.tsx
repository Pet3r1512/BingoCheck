/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { CacheProvider } from "@emotion/react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import fontsourceVariableRobotoCss from "@fontsource-variable/roboto?url";
import React from "react";
import { theme } from "~/setup/theme";
import { Header } from "~/components/Header";

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: fontsourceVariableRobotoCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const emotionCache = createCache({ key: "css" });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
      </head>
      <body>
        <Providers>
          <Header />

          <Container component="main" sx={{ paddingBlock: 4 }}>
            {children}
          </Container>
        </Providers>

        <Scripts />
      </body>
    </html>
  );
}
