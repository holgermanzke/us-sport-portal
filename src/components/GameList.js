import React from "react";
import { getResults } from "../api/results";
import styled from "@emotion/styled";
import preloader from "../assets/preloader.gif";
import vsIcon from "../assets/vs.png";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;
// const GameDate = styled.div``;

const TeamNames = styled.div`
  margin-top: 50px;
  margin-bottom: 15px;
  font-family: "Ubunto", sans-serif;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-around;
`;

const TeamIcon = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export default function GameList({ matchDay }) {
  const [games, setGames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function refreshGames() {
    const foundGames = await getResults(matchDay);
    setGames(foundGames);
    setLoading(false);
    return games;
  }

  React.useEffect(() => {
    refreshGames();
    // eslint-disable-next-line
  }, [matchDay]);

  return (
    <GameContainer>
      {loading && <img src={preloader} alt="loading" />}
      {!loading && <h2>{games[0].Group.GroupName}</h2>}
      {games.map(game => {
        const gameDate = new Date(game.MatchDateTime);
        return (
          <div key={game.MatchID}>
            {gameDate.toLocaleDateString()}
            <TeamNames>
              {game.Team1.TeamName} - {game.Team2.TeamName}
            </TeamNames>
            <IconWrapper>
              <TeamIcon
                src={game.Team1.TeamIconUrl}
                alt={game.Team1.ShortName}
              />
              <img src={vsIcon} alt="versus" width="40px" height="40px" />
              <TeamIcon
                src={game.Team2.TeamIconUrl}
                alt={game.Team2.ShortName}
              />
            </IconWrapper>
          </div>
        );
      })}
    </GameContainer>
  );
}
