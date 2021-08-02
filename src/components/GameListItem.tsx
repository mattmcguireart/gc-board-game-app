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
      <p>{aSingleGame.name}</p>
      <p>
        {aSingleGame.min_players}-{aSingleGame.max_players}
      </p>
      <p>
        {aSingleGame.min_playtime}-{aSingleGame.max_playtime}
      </p>
    </div>
  );
};

export default GameListItem;
