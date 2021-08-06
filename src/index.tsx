import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./context/auth-context";
import GamesContextProvider from "./context/GamesContextProvider";
import PreferencesContextProvider from "./context/PreferencesContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PreferencesContextProvider>
        <GamesContextProvider>
          <App />
        </GamesContextProvider>
      </PreferencesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
