/**
 * File: search.test.jsx
 * Purpose: Tests for SearchBar + Results (matches current UI + Holding model).
 */
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Holding from "./models/Holding";

describe("SearchBar", () => {
  it("calls onSearch with trimmed query", () => {
    let last = null;

    render(<SearchBar onSearch={(q) => (last = q)} />);

    // Your placeholder has extra text, so use regex:
    const input = screen.getByPlaceholderText(/Search investor or ticker/i);

    fireEvent.change(input, { target: { value: "  aapl  " } });
    fireEvent.click(screen.getByText("Search"));

    expect(last).toBe("aapl");
  });
});

describe("Results", () => {
  it("shows No results when list is empty", () => {
    render(<Results items={[]} />);

    // Your UI says: "No results. Try a different investor or ticker."
    expect(
      screen.getByText(/No results\./i)
    ).toBeTruthy();
  });

  it("renders an item when provided", () => {
    const items = [
      new Holding({ investor: "Test Fund", ticker: "TSLA", shares: 123 }),
    ];

    render(<Results items={items} />);

    expect(screen.getByText(/Test Fund/i)).toBeTruthy();
    expect(screen.getByText(/TSLA/i)).toBeTruthy();
  });
});
