import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GameListItem from "./GameListItem";

const game = {
  id: ";slkdfjas;ldkfj",
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

test("game has img element with class 'thumb-img' and successfully generates alt-text with name", () => {
  render(
    <Router>
      <GameListItem aSingleGame={game} />
    </Router>
  );
  const img = screen.getByRole("img", { name: "Game Thumbnail for Boardgame" });
  expect(img).toHaveClass("thumb-img");
});
