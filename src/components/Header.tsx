import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import castleImg from "../assets/castle_2.svg";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <img
        src={castleImg}
        alt="castle-logo"
        className="castleLogo headerChild"
      />
      <div className="title-nav-container">
        <div className="title">
          <Link to="/">
            <h1 className="headerh1">GameQuest</h1>
          </Link>
          <h2 className="headerh2">A Board Game Suggestion App</h2>
        </div>
        {user ? (
          <nav className="nav">
            <Link className="link" to="/search">
              Search
            </Link>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
            <button className="button" onClick={signOut}>
              Sign Out
            </button>
          </nav>
        ) : (
          <nav className="nav">
            <Link className="link" to="/search">
              Search
            </Link>
            <button className="button" onClick={signInWithGoogle}>
              Sign in
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
