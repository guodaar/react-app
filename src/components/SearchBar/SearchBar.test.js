import SearchBar from "./SearchBar";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe("SearchBar component", () => {
  it("renders the search bar correctly", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");
    const searchInput = screen.getByPlaceholderText("Search");

    expect(searchBar).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("has the correct styling", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");

    expect(searchBar).toHaveStyle("padding: 5px 40px");
    expect(searchBar).toHaveStyle("border-radius: 3px");
    expect(searchBar).toHaveStyle("background-color: #f1f0ef");
  });
});
