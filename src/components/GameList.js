import React from "react";
import { getResults } from "../api/results";

export default function GameList() {
  const [games, setGames] = React.useState([]);

  console.log(games);

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
      {games.map(game => (
        <div key={game.MatchID}>
          {game.Team1.TeamName} vs. {game.Team2.TeamName}
        </div>
      ))}
    </div>
  );
}
