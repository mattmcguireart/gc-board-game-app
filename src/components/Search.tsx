import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Search.css";

const Search = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [mechanic, setMechanic] = useState<string>("");
  const [minPlayers, setMinPlayers] = useState<number>(0);
  const [maxPlayers, setMaxPlayers] = useState<number>(8);
  const [minPlaytime, setMinPlaytime] = useState<number>(0);
  const [maxPlaytime, setMaxPlaytime] = useState<number>(180);
  const [resultsLimit, setResultsLimit] = useState<number>(30);
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const queryStringParameter: any = {};
    if (name) {
      queryStringParameter.name = name;
    }
    if (category) {
      queryStringParameter.categories = category;
    }
    if (mechanic) {
      queryStringParameter.mechanics = mechanic;
    }
    if (minPlayers) {
      queryStringParameter.gt_min_players = minPlayers;
    }
    if (maxPlayers) {
      queryStringParameter.lt_max_players = maxPlayers;
    }
    if (minPlaytime) {
      queryStringParameter.gt_min_playtime = minPlaytime;
    }
    if (maxPlaytime) {
      queryStringParameter.lt_max_playtime = maxPlaytime;
    }
    if (resultsLimit) {
      queryStringParameter.limit = resultsLimit;
    }
    history.push(
      "/results?" + new URLSearchParams(queryStringParameter).toString()
    );
  };
  return (
    <div className="Search">
      <h2>Search</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <div>
          <label htmlFor="name">Search by Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categories">Categories: </label>
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Pick A Category</option>
            <option value="KUBCKBkGxV">Adventure </option>
            <option value="eFaACC6y2c">Apocalyptic </option>
            <option value="HKaYVNIxAJ">Children's Games </option>
            <option value="ODWOjWAJj3">City Building </option>
            <option value="329DxyFL9D">Civilization </option>
            <option value="gscaL52VDG">Combat </option>
            <option value="7DfHn28Pcf">Crime </option>
            <option value="Ef4oYLHNhI">Cyberpunk </option>
            <option value="g2Hwv8t0Y5">Dungeon Crawl </option>
            <option value="B3NRLMK4xD">Educational </option>
            <option value="7rV11PKqME">Family Game </option>
            <option value="ZTneo8TaIO">Fantasy </option>
            <option value="KzEQIwIub7">Historic </option>
            <option value="cAIkk5aLdQ">Horror </option>
            <option value="TYnxiuiI3X">Humor </option>
            <option value="QAYkTHK1Dd">Medieval </option>
            <option value="Kk70K0524Z">Murder Mystery </option>
            <option value="rtslXnT90O">Ninjas </option>
            <option value="X8J7RM6dxX">Party Games </option>
            <option value="9EIayX6n5a">Pirates </option>
            <option value="TKQncFVX74">Political </option>
            <option value="ov6sEmlkiC">Print and Play </option>
            <option value="WVMOS3s2pb">Puzzle </option>
            <option value="2Gu62aKdma">RPG </option>
            <option value="tQGLgwdbYH">Racing </option>
            <option value="oojGpMQQ2l">Robots </option>
            <option value="KSBdPfxs6F">Roman Empire </option>
            <option value="3B3QpKvXD3">Sci-Fi </option>
            <option value="0MdRqhkNpw">Space Exploration </option>
            <option value="Hc6vcim5DS">Secret Agents </option>
            <option value="hShsL2DktG">Sports </option>
            <option value="4hZlqoitAY">Steampunk </option>
            <option value="buDTYyPw4D">Territory Building </option>
            <option value="CWYOF9xu7O">Transportation </option>
            <option value="YGHGDjahKY">Trivia </option>
            <option value="jX8asGGR6o">Wargame </option>
          </select>
        </div>
        <div>
          <label htmlFor="mechanics">Mechanics: </label>
          <select
            name="mechanics"
            id="mechanics"
            value={mechanic}
            onChange={(e) => setMechanic(e.target.value)}
          >
            <option value="">Pick A Mechanic</option>
            <option value="05zCZoLvQJ">Area Control </option>
            <option value="3tuJiW3pps">Betting </option>
            <option value="ZX3hYcF9H7">Bluffing </option>
            <option value="xuphiSlrxI">Campaign </option>
            <option value="iWODHwRGuU">Card Drafting </option>
            <option value="NjIbItz8uF">Challenge </option>
            <option value="9mNukNBxfZ">Cooperative </option>
            <option value="9zM9zB4fHY">Deception </option>
            <option value="vZsDDAdOoe">Deck Building </option>
            <option value="GsNGxZFNCK">Deduction </option>
            <option value="5kvyChnWuO">Dexterity </option>
            <option value="lVSHu9efHv">Dice Building </option>
            <option value="R0bGq4cAl4">Dice Rolling </option>
            <option value="yu3eas6v7A">Engine Building </option>
            <option value="U7vKyeRc0N">Hidden Roles </option>
            <option value="DwmsVEvNVd">Legacy </option>
            <option value="jMwUJLemr6">Negotiation </option>
            <option value="hmipYN1R1I">Press Your Luck </option>
            <option value="EVeAdboGUA">Role Playing </option>
            <option value="zIPRS41oiN">Roll and Write </option>
            <option value="eRe1jJCBFe">Simulation </option>
            <option value="x3wVCq1HEP">Social Deduction </option>
            <option value="uZR0NCIA6D">Solo Games </option>
            <option value="T8JEFYwoqy">Take That </option>
            <option value="8PN2HE86wg">Tile Placement </option>
            <option value="wEBvff5T5c">Tower Defense </option>
            <option value="AVY6EvSQTP">Trading </option>
            <option value="3GSQl800lk">Trick-taking </option>
            <option value="fBOTEBUAmV">Worker Placement </option>
          </select>
        </div>
        <div>
          <label htmlFor="min-players">Minimum Players: {minPlayers}</label>
          <input
            type="range"
            name="min-players"
            id="min-players"
            min="0"
            max="8"
            value={minPlayers}
            onChange={(e) => setMinPlayers(parseInt(e.target.value))}
            className="slider"
          />
          <label htmlFor="max-players">Maximum Players: {maxPlayers}</label>
          <input
            type="range"
            name="max-players"
            id="max-players"
            min="0"
            max="8"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(parseInt(e.target.value))}
            className="slider"
          />
        </div>
        <div>
          <label htmlFor="min-playtime">Minimum Playtime: {minPlaytime}</label>
          <input
            type="range"
            name="min-playtime"
            id="min-playtime"
            min="0"
            max="180"
            value={minPlaytime}
            onChange={(e) => setMinPlaytime(parseInt(e.target.value))}
          />
          <label htmlFor="max-playtime">Maximum Playtime: {maxPlaytime}</label>
          <input
            type="range"
            name="max-playtime"
            id="max-playtime"
            min="0"
            max="180"
            value={maxPlaytime}
            onChange={(e) => setMaxPlaytime(parseInt(e.target.value))}
          />
        </div>
        <div>
          <p>Limit Results:</p>
          <input
            type="radio"
            id="10"
            name="limit"
            value="10"
            checked={resultsLimit === 10}
            onChange={() => setResultsLimit(10)}
          />
          <label htmlFor="10">10</label>
          <input
            type="radio"
            id="20"
            name="limit"
            value="20"
            checked={resultsLimit === 20}
            onChange={() => setResultsLimit(20)}
          />
          <label htmlFor="20">20</label>
          <input
            type="radio"
            id="30"
            name="limit"
            value="30"
            checked={resultsLimit === 30}
            onChange={() => setResultsLimit(30)}
          />
          <label htmlFor="30">30</label>
          <input
            type="radio"
            id="50"
            name="limit"
            value="50"
            checked={resultsLimit === 50}
            onChange={() => setResultsLimit(50)}
          />
          <label htmlFor="50">50</label>
          <input
            type="radio"
            id="100"
            name="limit"
            value="100"
            checked={resultsLimit === 100}
            onChange={() => setResultsLimit(100)}
          />
          <label htmlFor="100">100</label>
        </div>

        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
