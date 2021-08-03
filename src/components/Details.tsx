import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Game from "../models/Game";
import { getGameSearch } from "../services/BGAapiService";
import "./Details.css";

interface RouteParams {
  id: string;
}

const Details = () => {
  const { id } = useParams<RouteParams>();

  const [game, setGame] = useState<Game>();
  useEffect(() => {
    getGameSearch({ id }).then((data) => {
      setGame(data.games[0]);
      console.log(game);
    });
  }, [id, game]);
  return (
    <div className="Details">
      <h2>{game?.name}</h2>
      <img src={game?.image_url} alt={`${game?.name}`} />
      <p>{game?.description_preview}</p>
      <p>
        Number of Players: {game?.gt_min_players} - {game?.lt_max_players}
      </p>
      <p>
        Average playtime: {game?.gt_min_playtime} - {game?.lt_max_playtime}{" "}
        minutes
      </p>
      <p>{game?.msrp_text}</p>
    </div>
  );
};

export default Details;
