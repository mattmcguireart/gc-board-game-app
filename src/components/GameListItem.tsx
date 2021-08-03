import { Link } from "react-router-dom";
import Game from "../models/Game";
import "./GameListItem.css";

interface Props {
  aSingleGame: Game;
  addGameToList: (game: Game) => void;
}

const GameListItem = ({ aSingleGame, addGameToList }: Props) => {
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
      <button>Add to My Games</button>
      <button>Add to My Wishlist</button>
    </div>
  );
};

export default GameListItem;
