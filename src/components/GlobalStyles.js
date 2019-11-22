import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          height: 100vh;
          width: 100vw;
          background: #2c6570;
          font-family: "News Cycle", sans-serif;
        }
      `}
    />
  );
}
