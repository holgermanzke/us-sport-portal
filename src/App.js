import React from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import AppBar from "./components/Header";
import GameList from "./components/GameList";
import { ThemeProvider } from "emotion-theming";
import { themes } from "./themes/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={themes.default}>
        <GlobalStyles />

        <AppBar />
        <GameList />
      </ThemeProvider>
    </>
  );
}
export default App;
