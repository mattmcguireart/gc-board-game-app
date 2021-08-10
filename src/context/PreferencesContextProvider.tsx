import { ReactNode, useState } from "react";
import { useHistory } from "react-router-dom";
import Game from "../models/Game";
import PreferencesContext from "./PreferencesContext";

interface Props {
  children: ReactNode;
}

const PreferencesContextProvider = ({ children }: Props) => {
  const [preferredGames, setPreferredGames] = useState<Game[]>([]);
  const history = useHistory();

  const findAverage = (games: any, property: string) => {
    return games.reduce((acc: any, val: any) => {
      return acc + val[property] / games.length;
    }, 0);
  };

  const handleSubmit = () => {
    const queryStringParameter: any = {};
    queryStringParameter.lt_max_players = findAverage(
      preferredGames,
      "max_players"
    );
    queryStringParameter.gt_min_players = findAverage(
      preferredGames,
      "min_players"
    );
    queryStringParameter.lt_max_playtime = findAverage(
      preferredGames,
      "max_playtime"
    );
    queryStringParameter.gt_min_playtime = findAverage(
      preferredGames,
      "min_playtime"
    );
    queryStringParameter.min_age = findAverage(preferredGames, "min_age");
    history.push(
      "/results?" + new URLSearchParams(queryStringParameter).toString()
    );
  };

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
        handleSubmit,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;
