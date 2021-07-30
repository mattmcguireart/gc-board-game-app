import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>GameQuest</h1>
      <h2>A board game suggestion app</h2>
      <Link to="">Random</Link>
      <Link to="">My Lists</Link>
    </header>
  );
};

export default Header;
