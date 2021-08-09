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
        setMyGames(data.filter((game) => game.my_games_list));
        setWishlist(data.filter((game) => game.wish_list));
      });
    }
  }, [user]);

  const addToMyGames = async (game: Game): Promise<void> => {
    await postGameToList(game);
    getGameList(user!.uid).then((data) => {
      setUserGames(data);
      setMyGames(data.filter((game) => game.my_games_list));
      setWishlist(data.filter((game) => game.wish_list));
    });
  };

  const removeFromMyGames = async (id: string): Promise<void> => {
    await removeGameFromList(id);
    getGameList(user!.uid).then((data) => {
      setUserGames(data);
      setMyGames(data.filter((game) => game.my_games_list));
      setWishlist(data.filter((game) => game.wish_list));
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
