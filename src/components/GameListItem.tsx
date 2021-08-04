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
  const { addToMyGames, userGames } = useContext(GamesContext);
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
      <p>
        {aSingleGame.gt_min_players}-{aSingleGame.lt_max_players}
      </p>
      <p>
        {aSingleGame.gt_min_playtime}-{aSingleGame.lt_max_playtime}
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
            <button>Remove from My Game</button>
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
            <button>Remove from my Wishlist</button>
          )}
        </div>
      )}
    </div>
  );
};

export default GameListItem;
