import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getGameSearch } from "../services/BGAapiService";
import Dashboard from "./Dashboard";
import "./LandingPage.css";
import Preferences from "./Preferences";

const LandingPage = () => {
  useEffect(() => {
    getGameSearch({ name: "catan" }).then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className="LandingPage">
      <p>Landing Page</p>
      <button>Sign in with Google</button>
      <Preferences />
      {/* only show preferences when not signed in  */}
      <Dashboard />
    </div>
  );
};

export default LandingPage;
