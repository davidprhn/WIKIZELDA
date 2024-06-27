import { getOneGame, getPostsByGameId } from "../../../services/gamesServices";
import { useEffect, useState } from "react";
import GamesCard from "../../../components/GamesCard/GamesCard";
import PostCard from "../../../components/PostCard/PostCard";
import "./TearsOfTheKingdom.css";

function TearsOfTheKingdom() {
  const [game, setGame] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gameResult = await getOneGame(5);
        console.log("Game:", gameResult);

        setGame(gameResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(game);
  return (
    <>
      <div className="posts-container">
        <GamesCard gameBody={game} />
      </div>
      <div className="posts-container2">
        {game.posts &&
          game.posts.map((post) => (
            <PostCard key={post.id} postBody={post.body} />
          ))}
      </div>
    </>
  );
}

export default TearsOfTheKingdom;
