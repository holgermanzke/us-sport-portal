import React from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import AppBar from "./components/Header";
import GameList from "./components/GameList";

function App() {
  return (
    <>
      <GlobalStyles />

      <AppBar />
      <GameList />
    </>
  );
}
export default App;
