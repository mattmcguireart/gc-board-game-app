import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Game from "../models/Game";
import { getGameSearch, postGameToList } from "../services/BGAapiService";
import GameList from "./GameList";
import "./SearchReturn.css";

const SearchReturn = () => {
  const searchParams = Object.fromEntries(
    new URLSearchParams(useLocation().search)
  );
  const [games, setGames] = useState<Game[]>([]);

  const addGameToList = async (game: Game) => {
    await postGameToList(game);
  };

  useEffect(() => {
    getGameSearch(searchParams).then((data) => {
      setGames(data.games);
    });
  }, []);
  return (
    <div className="SearchReturn">
      <GameList games={games} addGameToList={addGameToList} />
    </div>
  );
};

export default SearchReturn;
