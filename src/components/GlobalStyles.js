import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          height: 100vh;
          width: 100vw;
          background: ${theme.primarycolor};
          color: #ffffff;
          font-family: "News Cycle", sans-serif;
        }
      `}
    />
  );
}
