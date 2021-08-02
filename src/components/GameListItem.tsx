import { Link } from "react-router-dom";
import Game from "../models/Game";
import "./GameListItem.css";

interface Props {
  aSingleGame: Game;
}

const GameListItem = ({ aSingleGame }: Props) => {
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
        {aSingleGame.gt_min_players}-{aSingleGame.max_players}
      </p>
      <p>
        {aSingleGame.min_playtime}-{aSingleGame.max_playtime}
      </p>
    </div>
  );
};

export default GameListItem;
