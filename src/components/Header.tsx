import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <div className="title">
        <h1 className="headerh1">GameQuest</h1>
        <h2 className="headerh2">A Board Game Suggestion App</h2>
      </div>
      <div className="content">
        <nav className="Nav">
          <Link className="searchLink" to="/search">
            Search
          </Link>
        </nav>

        {user ? (
          <div className="userTrue">
            <Link className="dashboardLink" to="/">
              Dashboard
            </Link>
            <button onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <div className="signIn">
            <button onClick={signInWithGoogle}>Sign in</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
