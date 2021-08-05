import { createContext } from "react";
import Game from "../models/Game";

interface GamesContextModel {
  userGames: Game[];
  addToMyGames: (game: Game) => void;
  removeFromMyGames: (_id: string) => void;
  wishlist: Game[];
  myGames: Game[];
}

const defaultValues: GamesContextModel = {
  userGames: [],
  addToMyGames: () => {},
  removeFromMyGames: () => {},
  wishlist: [],
  myGames: [],
};

const GamesContext = createContext(defaultValues);

export default GamesContext;
