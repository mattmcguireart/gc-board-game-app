import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import castleImg from "../assets/background-castle.svg";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <img
        src={castleImg}
        alt="castle-logo"
        className="castleLogo headerChild"
      />
      <div className="title">
        <Link to="/">
          <h1 className="headerh1">GameQuest</h1>
        </Link>
        <h2 className="headerh2">A Board Game Suggestion App</h2>
      </div>
      {user ? (
        <nav className="nav userTrue headerChild">
          <Link className="link" to="/search">
            Search
          </Link>
          <Link className="link" to="/dashboard">
            Dashboard
          </Link>
          <button onClick={signOut}>Sign Out</button>
        </nav>
      ) : (
        <nav className="nav signIn headerChild">
          <Link className="link" to="/search">
            Search
          </Link>
          <button onClick={signInWithGoogle}>Sign in</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
