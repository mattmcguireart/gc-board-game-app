import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

test("renders GameQuest title", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const title = screen.getByText(/GameQ/i);
  expect(title).toBeInTheDocument();
});

test("renders GameQuest byline", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const title = screen.getByText(/suggestion/i);
  expect(title).toBeInTheDocument();
});

test("renders search link", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const search = screen.getByRole("link", { name: "Search" });
  expect(search).toBeInTheDocument();
});
