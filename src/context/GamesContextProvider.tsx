import { ReactNode, useContext, useEffect, useState } from "react";
import Game from "../models/Game";
import {
  getGameList,
  postGameToList,
  removeGameFromList,
} from "../services/BGAapiService";
import { AuthContext } from "./auth-context";
import GamesContext from "./GamesContext";

interface Props {
  children: ReactNode;
}

const GamesContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const [userGames, setUserGames] = useState<Game[]>([]);
  const [myGames, setMyGames] = useState<Game[]>([]);
  const [wishlist, setWishlist] = useState<Game[]>([]);

  useEffect(() => {
    if (user) {
      getGameList(user.uid).then((data) => {
        setUserGames(data);
      });
      if (userGames) {
        setMyGames(userGames.filter((game) => game.my_games_list));
        setWishlist(userGames.filter((game) => game.wish_list));
        console.log(userGames);
      }
    }
  }, [user, userGames.length]);

  const addToMyGames = async (game: Game): Promise<void> => {
    await postGameToList(game);
    getGameList(user!.uid).then((data) => {
      setUserGames(data);
    });
  };

  const removeFromMyGames = async (id: string): Promise<void> => {
    await removeGameFromList(id);
    getGameList(user!.uid).then((data) => {
      setUserGames(data);
    });
  };

  return (
    <GamesContext.Provider
      value={{
        userGames,
        addToMyGames,
        removeFromMyGames,
        myGames,
        wishlist,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
