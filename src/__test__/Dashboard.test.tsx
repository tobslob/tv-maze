import axios from "axios";
import { render, screen, within } from "@testing-library/react";
import IndexPage from "@/pages";
import { mockEpisodes } from "@/__mock__/data";
import { Episode } from "@/interfaces";

jest.mock("axios");

describe("Dashboard Component", () => {
  it("should render fetched episodes", async () => {
    render(IndexPage());

    (axios.get as jest.Mock).mockResolvedValue(mockEpisodes)();
    const items: Episode[] = await axios.get("https://api.tvmaze.com/schedule");

    expect(screen.getByText("Last Added Shows")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).toBeNull();
    expect(screen.queryByText("Error")).toBeNull();
    expect(items).toHaveLength(items.length);
  });
});
