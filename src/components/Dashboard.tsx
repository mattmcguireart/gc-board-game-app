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
      search.gt_min_age = Math.round(averages.avgAge) - 1;
      search.lt_max_players = Math.round(averages.avgMaxPlayer) + 1;
      search.gt_min_players = Math.round(averages.avgMinPlayer) - 1;
      search.lt_max_playtime = Math.round(averages.avgMaxPlaytime) + 1;
      search.gt_min_playtime = Math.round(averages.avgMinPlaytime) - 1;
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
      <div className="tabContainer">
        <button
          className={`tab ${tab === "all" ? "selected" : ""}`}
          onClick={() => setTab("all")}
        >
          All
        </button>
        <button
          className={`tab ${tab === "myGames" ? "selected" : ""}`}
          onClick={() => setTab("myGames")}
        >
          My Games
        </button>
        <button
          className={`tab ${tab === "wishlist" ? "selected" : ""}`}
          onClick={() => setTab("wishlist")}
        >
          Wishlist
        </button>
        <button
          className={`tab ${tab === "recommend" ? "selected" : ""}`}
          onClick={recommend}
        >
          Recommend A Game
        </button>
      </div>
      {tab === "all" && (
        <>
          <h3>All Games</h3>
          <div className="listContainer c1">
            <h4 className="title">My Games</h4>
            <GameList games={myGames} />
          </div>
          <div className="listContainer">
            <h4 className="title t2">Wishlist</h4>
            <GameList games={wishlist} />
          </div>
        </>
      )}
      {tab === "myGames" && (
        <>
          <div className="listContainer">
            <h4 className="title">My Games</h4>
            <GameList games={myGames} />
          </div>
        </>
      )}
      {tab === "wishlist" && (
        <>
          <div className="listContainer">
            <h4 className="title">Wishlist</h4>
            <GameList games={wishlist} />
          </div>
        </>
      )}
      {tab === "recommend" && userGames.length > 5 && (
        <>
          {recommendation && (
            <div className="recommendation">
              <GameListItem aSingleGame={recommendation} />
              <p className="description">
                {recommendation.description_preview}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
