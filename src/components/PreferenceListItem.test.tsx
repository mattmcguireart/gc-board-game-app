import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PreferenceListItem from "./PreferenceListItem";

const game1 = {
  id: "111111",
  name: "Boardgame",
  url: "www.game.com",
  min_players: 1,
  max_players: 4,
  min_playtime: 30,
  max_playtime: 90,
  msrp_text: "14.99",
  description_preview: "sldkfjsa;ldkfjsalkfjas;lkfjalskfj",
  thumb_url: "img-url.com",
  image_url: "lskdfjhaslkdj.com",
  categories: [],
  mechanics: [],
};

const game2 = {
  id: "123123",
  name: "Boardgame2",
  url: "www.game.com",
  min_players: 1,
  max_players: 4,
  min_playtime: 30,
  max_playtime: 90,
  msrp_text: "14.99",
  description_preview: "sldkfjsa;ldkfjsalkfjas;lkfjalskfj",
  thumb_url: "img-url.com",
  image_url: "lskdfjhaslkdj.com",
  categories: [],
  mechanics: [],
};

const games = [game1];

test("checkPreferences function finds game in preferences", () => {
  const spy = jest.fn();
  render(
    <Router>
      <PreferenceListItem
        suggestion={game1}
        addToPreferredGames={spy}
        removeFromPreferredGames={spy}
        preferredGames={games}
      />
    </Router>
  );
  const item = screen.getByRole("listitem");
  expect(item).toHaveClass("selected");
});

test("checkPreferences function doesn't find game not in preferences", () => {
  const spy = jest.fn();
  render(
    <Router>
      <PreferenceListItem
        suggestion={game2}
        addToPreferredGames={spy}
        removeFromPreferredGames={spy}
        preferredGames={games}
      />
    </Router>
  );
  const item = screen.getByRole("listitem");
  expect(item).not.toHaveClass("selected");
});
