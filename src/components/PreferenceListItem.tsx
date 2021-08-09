import { useContext } from "react";
import { Link } from "react-router-dom";
import PreferencesContext from "../context/PreferencesContext";
import Game from "../models/Game";
import "./PreferenceListItem.css";

interface Props {
  suggestion: Game;
  addToPreferredGames: (game: Game) => void;
  removeFromPreferredGames: (id: string) => void;
  preferredGames: Game[];
}

const PreferenceListItem = ({
  suggestion,
  addToPreferredGames,
  removeFromPreferredGames,
  preferredGames,
}: Props) => {
  const handleClick = () => {
    if (checkPreferences()) {
      removeFromPreferredGames(suggestion.id);
    } else {
      addToPreferredGames(suggestion);
    }
  };

  const checkPreferences = (): boolean => {
    return preferredGames.some((game) => suggestion.id === game.id);
  };

  return (
    <li
      className={`PreferenceListItem ${checkPreferences() ? "selected" : ""}`}
      onClick={handleClick}
    >
      <img
        className="thumbImg"
        src={suggestion.thumb_url}
        alt={`Game Thumbnail for ${suggestion.name}`}
      />
      <h2>{suggestion.name}</h2>
      {suggestion.min_players === suggestion.max_players ? (
        <p>Players: {suggestion.min_players}</p>
      ) : (
        <p>
          Players: {suggestion.min_players}-{suggestion.max_players}
        </p>
      )}
      {suggestion.min_playtime === suggestion.max_playtime ? (
        <p>Playtime: {suggestion.min_playtime} minutes</p>
      ) : (
        <p>
          Playtime: {suggestion.min_playtime}-{suggestion.max_playtime} minutes
        </p>
      )}
    </li>
  );
};

export default PreferenceListItem;
