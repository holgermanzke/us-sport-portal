import React from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import AppBar from "./components/Header";
import GameList from "./components/GameList";
import { ThemeProvider } from "emotion-theming";
import { themes } from "./themes/themes";

function App() {
  const [matchDay, setMatchDay] = React.useState(17);

  return (
    <>
      <ThemeProvider theme={themes.default}>
        <GlobalStyles />

        <AppBar
          matchDay={matchDay}
          onMatchDayChange={newMatchDay => setMatchDay(newMatchDay)}
        />
        <GameList matchDay={matchDay} />
      </ThemeProvider>
    </>
  );
}
export default App;
