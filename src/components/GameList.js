import React from "react";
import { getResults } from "../api/results";

export default function GameList() {
  const [games, setGames] = React.useState([]);

  async function refreshGames() {
    const foundGames = await getResults();
    setGames(foundGames);
    return games;
  }

  React.useEffect(() => {
    refreshGames();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Aktueller Spieltag</h2>
      {games.map(game => (
        <div key={game.MatchID}>
          <div>
            {game.Team1.TeamName} vs. {game.Team2.TeamName}
          </div>
        </div>
      ))}
    </div>
  );
}
