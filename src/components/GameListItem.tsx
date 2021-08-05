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
  return (
    <div className="GameListItem">
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

      <p>
        Playtime: {aSingleGame.min_playtime}-{aSingleGame.max_playtime}
      </p>
      {user && (
        <div>
          {!checkMyGames() ? (
            <button
              onClick={() =>
                addToMyGames({
                  ...aSingleGame,
                  uid: user!.uid,
                  my_games_list: true,
                })
              }
            >
              Add to My Games
            </button>
          ) : (
            <button onClick={() => deleteFromMyGames()}>
              Remove from My Games
            </button>
          )}
          {!checkWishList() ? (
            <button
              onClick={() =>
                addToMyGames({
                  ...aSingleGame,
                  uid: user?.uid,
                  wish_list: true,
                })
              }
            >
              Add to My Wishlist
            </button>
          ) : (
            <button onClick={() => deleteFromWishlist()}>
              Remove from my Wishlist
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GameListItem;
