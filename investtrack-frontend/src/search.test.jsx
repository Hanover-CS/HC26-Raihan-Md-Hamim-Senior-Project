/**
 * File: search.test.jsx
 * Purpose: Automated tests for search UI behavior and results rendering.
 */
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

describe("SearchBar", () => {
  it("calls onSearch with trimmed query", () => {
    let last = null;

    render(<SearchBar onSearch={(q) => (last = q)} />);

    fireEvent.change(screen.getByPlaceholderText("Search investor or ticker"), {
      target: { value: "  aapl  " },
    });

    fireEvent.click(screen.getByText("Search"));
    expect(last).toBe("aapl");
  });
});

describe("Results", () => {
  it("shows No results when list is empty", () => {
    render(<Results items={[]} selectedKey={null} onSelect={() => {}} />);
    expect(screen.getByText("No results.")).toBeTruthy();
  });

  it("renders an item when provided", () => {
    render(
      <Results
        items={[{ investor: "Test Fund", ticker: "TSLA", shares: 123 }]}
        selectedKey={null}
        onSelect={() => {}}
      />
    );

    expect(screen.getByText(/Test Fund/)).toBeTruthy();
    expect(screen.getByText(/TSLA/)).toBeTruthy();
  });
});

