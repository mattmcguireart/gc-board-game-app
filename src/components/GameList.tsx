import React from "react";
import Game from "../models/Game";
import "./GameList.css";
import GameListItem from "./GameListItem";

interface Props {
  games: Game[];
}

const GameList = ({ games }: Props) => {
  return (
    <div className="GameList">
      <ul>
        {games.map((game) => {
          return <GameListItem aSingleGame={game} key={game.id} />;
        })}
      </ul>
    </div>
  );
};

export default GameList;
