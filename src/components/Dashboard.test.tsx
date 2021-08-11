import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";

test("'All' tab has 'tab' class", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const allTab = screen.getByRole("button", { name: "All" });
  expect(allTab).toHaveClass("tab");
});

test("recommend button adds class 'selected' on click", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const btn = screen.getByRole("button", { name: "Recommend A Game" });
  fireEvent.click(btn);
  expect(btn).toHaveClass("selected");
});
