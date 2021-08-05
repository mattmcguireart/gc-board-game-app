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
        <h1>GameQuest</h1>
        <h2>A board game suggestion app</h2>
      </div>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/">Dashboard</Link>
      </nav>

      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      )}
    </header>
  );
};

export default Header;
