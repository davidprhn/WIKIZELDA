import { getOneGame } from "../../../services/gamesServices";
import { useEffect, useState } from "react";
import GamesCard from "../../../components/GamesCard/GamesCard";
import "./TheWindWaker.css";

function TheWindWaker() {
  const [game, setGames] = useState({});

  useEffect(() => {
    const gameRequest = async () => {
      const result = await getOneGame(2);
      setGames(result);
    };
    gameRequest();
  }, []);

  console.log(game);
  return (
    <div className="posts-container">
      <GamesCard gameBody={game} />
    </div>
  );
}

export default TheWindWaker;
