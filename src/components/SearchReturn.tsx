import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Game from "../models/Game";
import { getGameSearch } from "../services/BGAapiService";
import GameList from "./GameList";
import "./SearchReturn.css";

const SearchReturn = () => {
  const query = new URLSearchParams(useLocation().search);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGameSearch(query).then((data) => {
      console.log(data.games);
      setGames(data.games);
    });
  }, []);
  return (
    <div className="SearchReturn">
      <GameList games={games} />
    </div>
  );
};

export default SearchReturn;
