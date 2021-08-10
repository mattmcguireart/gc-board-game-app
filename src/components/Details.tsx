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
    getGameSearch({ ids: id }).then((data) => {
      setGame(data.games[0]);
    });
  }, [id]);
  console.log(game);
  return (
    <div className="Details">
      <h2 className="title">{game?.name}</h2>
      <img className="img" src={game?.image_url} alt={`${game?.name}`} />
      <p>
        Number of Players: {game?.min_players} - {game?.max_players} players
      </p>
      <p>
        Average playtime: {game?.min_playtime} - {game?.max_playtime} minutes
      </p>
      <p>MSRP: {game?.msrp_text}</p>
      {/* <p>Minimum Age: {game?.min_age}</p>
      <p>{game?.description_preview}</p>

      {game?.primary_publisher && (
        <p>Publisher: {game?.primary_publisher.name}</p>
      )}
      <p>Year: {game?.year_published}</p> */}
    </div>
  );
};

export default Details;
