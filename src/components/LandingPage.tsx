import { useEffect } from "react";
import { getGameSearch } from "../services/BGAapiService";
import "./LandingPage.css";

const LandingPage = () => {
  useEffect(() => {
    getGameSearch({ name: "catan" }).then((data) => {
      console.log(data);
    });
  }, []);
  return <div className="LandingPage">LandingPage works</div>;
};

export default LandingPage;
