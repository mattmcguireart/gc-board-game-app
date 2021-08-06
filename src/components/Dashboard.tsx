import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import GamesContext from "../context/GamesContext";
import Game from "../models/Game";
import { getAverages, getGameSearch } from "../services/BGAapiService";
import "./Dashboard.css";
import GameList from "./GameList";
import GameListItem from "./GameListItem";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { addToMyGames, userGames, removeFromMyGames, wishlist, myGames } =
    useContext(GamesContext);
  const [recommendations, setRecommendations] = useState<any>([]);
  const [recommendation, setRecommendation] = useState<any>();
  const recommend = async () => {
    if (!recommendation) {
      const [averages] = await getAverages(user!.uid);
      const search: any = {};
      search.gt_min_age = Math.round(averages.avgAge);
      search.lt_max_players = Math.round(averages.avgMaxPlayer);
      search.gt_min_players = Math.round(averages.avgMinPlayer);
      search.lt_max_playtime = Math.round(averages.avgMaxPlaytime);
      search.gt_min_playtime = Math.round(averages.avgMinPlaytime);
      const { games } = await getGameSearch(search);
      setRecommendations(games);
      setRecommendation(games[Math.floor(Math.random() * games.length)]);
    } else {
      setRecommendation(
        recommendations[Math.floor(Math.random() * recommendations.length)]
      );
    }
  };

  return (
    <div className="Dashboard">
      {/* my feed -- from Preferences */}

      {/* my games list */}
      <h3 className="title">My Games</h3>

      <GameList games={myGames} />

      {/* wishlist */}
      <h3>Wishlist</h3>
      <GameList games={wishlist} />

      {/* recommend me a game */}
      <h3>Get a Boardgame Recommendation</h3>
      <button onClick={recommend}>Recommend!</button>
      {recommendation && <GameListItem aSingleGame={recommendation} />}
    </div>
  );
};

export default Dashboard;
