import { createContext } from "react";
import Game from "../models/Game";

interface GamesContextModel {
  userGames: Game[];
  addToMyGames: (game: Game) => void;
  removeFromMyGames: (_id: string) => void;
}

const defaultValues: GamesContextModel = {
  userGames: [],
  addToMyGames: () => {},
  removeFromMyGames: () => {},
};

const GamesContext = createContext(defaultValues);

export default GamesContext;
