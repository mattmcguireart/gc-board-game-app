import React from "react";
import Game from "../models/Game";
import "./GameList.css";
import GameListItem from "./GameListItem";

interface Props {
  games: Game[];
}

const GameList = ({ games }: Props) => {
  console.log(games);
  return (
    <div className="GameList">
      <ul>
        {games.map((game) => {
          return <GameListItem aSingleGame={game} />;
        })}
      </ul>
    </div>
  );
};

export default GameList;
