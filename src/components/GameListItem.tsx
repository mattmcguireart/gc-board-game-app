import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import GamesContext from "../context/GamesContext";
import Game from "../models/Game";
import "./GameListItem.css";

interface Props {
  aSingleGame: Game;
}

const GameListItem = ({ aSingleGame }: Props) => {
  const { user } = useContext(AuthContext);
  const { addToMyGames, userGames, removeFromMyGames } =
    useContext(GamesContext);
  const checkMyGames = () => {
    return userGames.some(
      (game) =>
        game.uid === user!.uid &&
        game.my_games_list &&
        game.id === aSingleGame.id
    );
  };
  const checkWishList = () =>
    userGames.some(
      (game) =>
        game.uid === user!.uid && game.wish_list && game.id === aSingleGame.id
    );
  const deleteFromMyGames = (): void => {
    const found = userGames.find((item) => {
      return (
        item.uid === user!.uid &&
        item.id === aSingleGame.id &&
        item.my_games_list
      );
    });
    if (found) {
      removeFromMyGames(found._id!);
      console.log("test");
    }
  };
  const deleteFromWishlist = (): void => {
    const found = userGames.find((item) => {
      return (
        item.uid === user!.uid && item.id === aSingleGame.id && item.wish_list
      );
    });
    if (found) {
      removeFromMyGames(found._id!);
    }
  };

  const addGameToMyGames = async () => {
    deleteFromWishlist();
    const duplicate = { ...aSingleGame };
    duplicate.wish_list = false;
    duplicate.my_games_list = true;
    duplicate.uid = user!.uid;
    delete duplicate._id;
    console.log(duplicate);
    addToMyGames(duplicate);
  };

  const addGameToWishList = async () => {
    const duplicate = { ...aSingleGame };
    duplicate.wish_list = true;
    duplicate.my_games_list = false;
    duplicate.uid = user!.uid;
    delete duplicate._id;
    addToMyGames(duplicate);
  };

  return (
    <li className="GameListItem">
      <img
        className="thumb-img"
        src={aSingleGame.thumb_url}
        alt={`Game Thumbnail for ${aSingleGame.name}`}
      />
      <h2>
        <Link to={`/details/${aSingleGame.id}`}>{aSingleGame.name}</Link>
      </h2>
      {aSingleGame.min_players === aSingleGame.max_players ? (
        <p>Players: {aSingleGame.min_players}</p>
      ) : (
        <p>
          Players: {aSingleGame.min_players}-{aSingleGame.max_players}
        </p>
      )}
      {aSingleGame.min_playtime === aSingleGame.max_playtime ? (
        <p>Playtime: {aSingleGame.min_playtime} minutes</p>
      ) : (
        <p>
          Playtime: {aSingleGame.min_playtime}-{aSingleGame.max_playtime}{" "}
          minutes
        </p>
      )}
      {user && (
        <div>
          {!checkMyGames() && (
            <button className="gameButtons" onClick={addGameToMyGames}>
              Add to My Games
            </button>
          )}
          {checkMyGames() && (
            <button className="gameButtons" onClick={() => deleteFromMyGames()}>
              Remove from My Games
            </button>
          )}
          {!checkWishList() && !checkMyGames() && (
            <button className="gameButtons" onClick={addGameToWishList}>
              Add to My Wishlist
            </button>
          )}
          {checkWishList() && (
            <button
              className="gameButtons"
              onClick={() => deleteFromWishlist()}
            >
              Remove from my Wishlist
            </button>
          )}
        </div>
      )}
    </li>
  );
};

export default GameListItem;
