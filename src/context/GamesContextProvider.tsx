import { ReactNode, useContext, useEffect, useState } from "react";
import Game from "../models/Game";
import { getGameList, postGameToList } from "../services/BGAapiService";
import { AuthContext } from "./auth-context";
import GamesContext from "./GamesContext";

interface Props {
  children: ReactNode;
}

const GamesContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [userGames, setUserGames] = useState<Game[]>([]);

  useEffect(() => {
    if (user) {
      getGameList(user.uid).then((data) => {
        setUserGames(data);
      });
    }
  }, [user]);

  const addToMyGames = async (game: Game): Promise<void> => {
    await postGameToList(game);
    getGameList(user!.uid).then((data) => {
      setUserGames(data);
    });
  };

  const removeFromMyGames = () => {};

  return (
    <GamesContext.Provider
      value={{
        userGames,
        addToMyGames,
        removeFromMyGames,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
