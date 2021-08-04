import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Dashboard from "./Dashboard";
import "./LandingPage.css";
import Preferences from "./Preferences";

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="LandingPage">
      {user ? (
        <div>
          <Dashboard />
        </div>
      ) : (
        <div>
          <p>Select your preferences, or sign in</p>
          <Preferences />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
