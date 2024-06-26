import { getOneGame } from "../../../services/gamesServices";
import { useEffect, useState } from "react";
import GamesCard from "../../../components/GamesCard/GamesCard";
import "./BreathOfTheWild.css";

function BreathOfTheWild() {
  const [game, setGames] = useState({});

  useEffect(() => {
    const gameRequest = async () => {
      const result = await getOneGame(4);
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

export default BreathOfTheWild;
