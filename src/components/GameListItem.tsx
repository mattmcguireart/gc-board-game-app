import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import Game from "../models/Game";
import "./GameListItem.css";

interface Props {
  aSingleGame: Game;
  addGameToList: (game: Game) => void;
}

const GameListItem = ({ aSingleGame, addGameToList }: Props) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="GameListItem">
      <img
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
      <button
        onClick={() =>
          addGameToList({ ...aSingleGame, uid: user?.uid, my_games_list: true })
        }
      >
        Add to My Games
      </button>
      <button
        onClick={() =>
          addGameToList({ ...aSingleGame, uid: user?.uid, wish_list: true })
        }
      >
        Add to My Wishlist
      </button>
    </div>
  );
};

export default GameListItem;
