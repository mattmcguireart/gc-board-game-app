import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import "./LandingPage.css";

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="LandingPage">
      <h2>Welcome to GameQuest</h2>
      <p>This is an app where ...</p>
      <Link to="/search">Search</Link>
      <Link to="/preferences">Get recommendations</Link>
    </div>
  );
};

export default LandingPage;
