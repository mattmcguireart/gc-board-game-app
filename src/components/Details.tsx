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

  return (
    <div className="Details">
      <div className="titleImg">
        <h2 className="title">{game?.name}</h2>
        <img className="img" src={game?.image_url} alt={`${game?.name}`} />
      </div>
      {game?.min_players === game?.max_players ? (
        <p>Players: {game?.min_players}</p>
      ) : (
        <p>
          Players: {game?.min_players}-{game?.max_players}
        </p>
      )}
      {game?.min_playtime === game?.max_playtime ? (
        <p>Playtime: {game?.min_playtime} minutes</p>
      ) : (
        <p>
          Playtime: {game?.min_playtime}-{game?.max_playtime} minutes
        </p>
      )}
      <p>MSRP: {game?.msrp_text}</p>
      <p>Minimum Age: {game?.min_age}</p>
      <p>{game?.description_preview}</p>
      {game?.primary_publisher && (
        <p>Publisher: {game?.primary_publisher.name}</p>
      )}
      <p>Year: {game?.year_published}</p>
    </div>
  );
};

export default Details;
