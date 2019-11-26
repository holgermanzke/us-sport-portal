import React from "react";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import AppBar from "./components/Header";
import GameList from "./components/GameList";
import SelectMatchDay from "./components/SelectMatchDay";

function App() {
  // const [selectMatchDay, setSelectMatchDay] = React.useState(17);
  return (
    <>
      <GlobalStyles />

      <AppBar
      // selectMatchDay="17"
      // onSelectChangeValue={selectMatchDay => setSelectMatchDay}
      />
      <GameList matchDay="17" />
    </>
  );
}
export default App;
