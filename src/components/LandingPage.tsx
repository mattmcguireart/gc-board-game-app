import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingContainer">
      <div className="LandingPage">
        <div className="text">
          <h2>Your new favorite boardgame is just a click away...</h2>
          <p className="paragraph p1">
            GameQuest is your destination to find what's new in the crunchy,
            fiddly, and/or hot world of boardgames.
          </p>
          <p className="paragraph p2">
            Click Get Recommendations to select games that you already love --
            we'll generate a list of games that fit your interests.
          </p>
          <p className="paragraph p3">
            Sign in and add to your lists to get recommendations based on what's
            on your shelf.
          </p>
          <p className="paragraph p4">
            Or, click Search to browse for specific games.
          </p>
        </div>
        <div className="links">
          <Link className="link" to="/search">
            Search
          </Link>
          <Link className="link" to="/preferences">
            Get Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
