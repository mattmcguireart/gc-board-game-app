import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { getGameSearch } from "../services/BGAapiService";
import Dashboard from "./Dashboard";
import "./LandingPage.css";
import Preferences from "./Preferences";

const LandingPage = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getGameSearch({ name: "catan" }).then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className="LandingPage">
      <p>Landing Page</p>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
      <Preferences />
      {/* only show preferences when not signed in  */}
      <Dashboard />
    </div>
  );
};

export default LandingPage;
