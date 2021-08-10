import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import GamesContext from "../context/GamesContext";
import { getAverages, getGameSearch } from "../services/BGAapiService";
import "./Dashboard.css";
import GameList from "./GameList";
import GameListItem from "./GameListItem";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { userGames, wishlist, myGames } = useContext(GamesContext);
  const [recommendations, setRecommendations] = useState<any>([]);
  const [recommendation, setRecommendation] = useState<any>();
  const [tab, setTab] = useState<string>("all");
  const recommend = async () => {
    setTab("recommend");
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
      <div className="buttonContainer">
        <button className="button" onClick={() => setTab("all")}>
          All
        </button>
        <button className="button" onClick={() => setTab("myGames")}>
          My Games
        </button>
        <button className="button" onClick={() => setTab("wishlist")}>
          Wishlist
        </button>
        <button className="button" onClick={recommend}>
          Recommend A Game
        </button>
      </div>
      {tab === "all" && (
        <>
          <h3 className="title">My Games</h3>
          <GameList games={myGames} />
          <h3 className="title">Wishlist</h3>
          <GameList games={wishlist} />
        </>
      )}
      {tab === "myGames" && (
        <>
          <h3 className="title">My Games</h3>
          <GameList games={myGames} />
        </>
      )}
      {tab === "wishlist" && (
        <>
          <h3 className="title">Wishlist</h3>
          <GameList games={wishlist} />
        </>
      )}
      {tab === "recommend" && userGames.length > 5 && (
        <>
          <h3 className="title"> Get a Boardgame Recommendation</h3>
          {recommendation && <GameListItem aSingleGame={recommendation} />}
        </>
      )}
    </div>
  );
};

export default Dashboard;
