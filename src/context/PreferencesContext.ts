import { createContext } from "react";
import Game from "../models/Game";

interface PreferencesContextModel {
  preferredGames: Game[];
  addToPreferredGames: (game: Game) => void;
  removeFromPreferredGames: (_id: string) => void;
  handleSubmit: () => void;
}

const defaultValues: PreferencesContextModel = {
  preferredGames: [],
  addToPreferredGames: () => {},
  removeFromPreferredGames: () => {},
  handleSubmit: () => {},
};

const PreferencesContext = createContext(defaultValues);

export default PreferencesContext;
