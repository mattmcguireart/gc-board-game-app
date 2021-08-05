import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import Game from "../models/Game";
import { getAverages, getGameSearch } from "../services/BGAapiService";
import "./Dashboard.css";
import GameList from "./GameList";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [results, setResults] = useState<any>([]);
  const recommend = async () => {
    const [averages] = await getAverages(user!.uid);
    console.log(averages);
    const search: any = {};
    search.gt_min_age = Math.round(averages.avgAge);
    console.log(search);
    search.lt_max_players = Math.round(averages.avgMaxPlayer);
    search.gt_min_players = Math.round(averages.avgMinPlayer);
    search.lt_max_playtime = Math.round(averages.avgMaxPlaytime);
    search.gt_min_playtime = Math.round(averages.avgMinPlaytime);
    const { games } = await getGameSearch(search);
    console.log(games);
    setResults(games);
  };

  return (
    <div className="Dashboard">
      {results.length > 0 && <p>{results[0].name}</p>}
      {/* <GameList games={results.games} /> */}
      {/* my feed -- from Preferences */}
      {/* my games list */}
      {/* wishlist */}
      {/* recommend me a game */}
      <button onClick={recommend}>Recommend me a game</button>
    </div>
  );
};

export default Dashboard;
