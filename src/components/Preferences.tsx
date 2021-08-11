import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Game from "../models/Game";
import { getGameSearch } from "../services/BGAapiService";
import PreferenceListItem from "./PreferenceListItem";
import "./Preferences.css";

const Preferences = () => {
  const [suggestions, setSuggestions] = useState<Game[]>([]);
  const [preferredGames, setPreferredGames] = useState<Game[]>([]);
  const history = useHistory();

  const findAverage = (games: any, property: string) => {
    return games.reduce((acc: any, val: any) => {
      return acc + val[property] / games.length;
    }, 0);
  };
  const handleSubmit = () => {
    const queryStringParameter: any = {};
    queryStringParameter.lt_max_players =
      parseInt(findAverage(preferredGames, "max_players")) + 1;
    queryStringParameter.gt_min_players =
      parseInt(findAverage(preferredGames, "min_players")) - 1;
    queryStringParameter.lt_max_playtime =
      parseInt(findAverage(preferredGames, "max_playtime")) + 1;
    queryStringParameter.gt_min_playtime =
      parseInt(findAverage(preferredGames, "min_playtime")) - 1;
    queryStringParameter.min_age =
      parseInt(findAverage(preferredGames, "min_age")) - 1;
    history.push(
      "/results?" + new URLSearchParams(queryStringParameter).toString()
    );
  };

  const addToPreferredGames = (game: Game) => {
    setPreferredGames((prev) => [...prev, game]);
  };

  const removeFromPreferredGames = (id: string) => {
    const index = preferredGames.findIndex((game) => game.id === id);
    setPreferredGames((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };

  useEffect(() => {
    getGameSearch("").then((data) => {
      setSuggestions(data.games);
    });
  }, []);
  return (
    <div className="Preferences">
      <div className="text">
        <p>
          Select five or more favorites from the list below to generate a list
          of recommended boardgames.
        </p>
      </div>

      <ul className="preference-list">
        {suggestions.map((suggestion) => {
          return (
            <PreferenceListItem
              suggestion={suggestion}
              key={suggestion.id}
              addToPreferredGames={addToPreferredGames}
              removeFromPreferredGames={removeFromPreferredGames}
              preferredGames={preferredGames}
            />
          );
        })}
      </ul>
      {preferredGames.length >= 5 && (
        <button className="prefButton" onClick={handleSubmit}>
          Get game recommendations!
        </button>
      )}
    </div>
  );
};

export default Preferences;
