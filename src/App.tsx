import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Search from "./components/Search";
import SearchReturn from "./components/SearchReturn";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/results" exact>
            <SearchReturn />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
