import React from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import AppBar from "./components/Header";
import GameList from "./components/GameList";
import { ThemeProvider } from "emotion-theming";
import { themes } from "./themes/themes";

function App() {
  // const [selectMatchDay, setSelectMatchDay] = React.useState(17);
  return (
    <>
      <ThemeProvider theme={themes.default}>
        <GlobalStyles />

        <AppBar
        // selectMatchDay="17"
        // onSelectChangeValue={selectMatchDay => setSelectMatchDay}
        />
        <GameList matchDay="17" />
      </ThemeProvider>
    </>
  );
}
export default App;
