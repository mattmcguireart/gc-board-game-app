import { ReactNode, useState } from "react";
import Game from "../models/Game";
import PreferencesContext from "./PreferencesContext";

interface Props {
  children: ReactNode;
}

const PreferencesContextProvider = ({ children }: Props) => {
  const [preferredGames, setPreferredGames] = useState<Game[]>([]);
  //   const [searchObject, setSearchObject] = useState<any>({});

  const addToPreferredGames = (game: Game) => {
    setPreferredGames((prev) => [...prev, game]);
  };

  const removeFromPreferredGames = (id: string) => {
    const index = preferredGames.findIndex((game) => game.id === id);
    setPreferredGames((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };

  return (
    <PreferencesContext.Provider
      value={{
        preferredGames,
        addToPreferredGames,
        removeFromPreferredGames,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;
