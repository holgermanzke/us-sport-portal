import React from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import AppBar from "./components/Header";
import GameList from "./pages/GameList";
import { ThemeProvider } from "emotion-theming";
import { themes } from "./themes/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Goalgetters from "./pages/Goalgetters";

function App() {
  const [matchDay, setMatchDay] = React.useState(17);

  return (
    <>
      <ThemeProvider theme={themes.default}>
        <GlobalStyles />
        <Router>
          <AppBar
            matchDay={matchDay}
            onMatchDayChange={newMatchDay => setMatchDay(newMatchDay)}
          />

          <Switch>
            <Route
              exact
              path="/"
              component={() => <GameList matchDay={matchDay} />}
            />
            <Route path="/goalgetter" component={Goalgetters} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
