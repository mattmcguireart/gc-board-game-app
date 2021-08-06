import { useEffect, useState } from "react";
import Game from "../models/Game";
import { getGameSearch } from "../services/BGAapiService";
import PreferenceListItem from "./PreferenceListItem";
import "./Preferences.css";

const Preferences = () => {
  const [suggestions, setSuggestions] = useState<Game[]>([]);
  useEffect(() => {
    getGameSearch("").then((data) => {
      setSuggestions(data.games);
    });
  }, []);
  return (
    <div className="Preferences">
      <h2>Select Your Preferences</h2>
      <ul className="preference-list">
        {suggestions.map((suggestion) => {
          return (
            <PreferenceListItem suggestion={suggestion} key={suggestion.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default Preferences;
