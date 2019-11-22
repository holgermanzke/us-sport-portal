import React from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import AppBar from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppBar>
        <h1>US Sports App</h1>
      </AppBar>
    </>
  );
}
export default App;
