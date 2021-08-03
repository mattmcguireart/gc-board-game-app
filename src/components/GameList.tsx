import React from "react";
import Game from "../models/Game";
import "./GameList.css";
import GameListItem from "./GameListItem";

interface Props {
  games: Game[];
  addGameToList: (game: Game) => void;
}

const GameList = ({ games, addGameToList }: Props) => {
  console.log(games);
  return (
    <div className="GameList">
      <ul>
        {games.map((game) => {
          return (
            <GameListItem aSingleGame={game} addGameToList={addGameToList} />
          );
        })}
      </ul>
    </div>
  );
};

export default GameList;
