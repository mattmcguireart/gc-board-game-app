import { createContext } from "react";
import Game from "../models/Game";

interface PreferencesContextModel {
  preferredGames: Game[];
  addToPreferredGames: (game: Game) => void;
  removeFromPreferredGames: (_id: string) => void;
}

const defaultValues: PreferencesContextModel = {
  preferredGames: [],
  addToPreferredGames: () => {},
  removeFromPreferredGames: () => {},
};

const PreferencesContext = createContext(defaultValues);

export default PreferencesContext;
