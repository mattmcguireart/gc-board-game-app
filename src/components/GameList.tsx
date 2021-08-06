import React from "react";
import Game from "../models/Game";
import "./GameList.css";
import GameListItem from "./GameListItem";

interface Props {
  games: Game[];
}

const GameList = ({ games }: Props) => {
  return (
    <ul className="GameList">
      {games.map((game) => {
        return <GameListItem aSingleGame={game} key={game.id} />;
      })}
    </ul>
  );
};

export default GameList;
