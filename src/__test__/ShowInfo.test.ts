import axios from "axios";
import { render, screen } from "@testing-library/react";
import { mockShowWithCast } from "@/__mock__/data";
import { Show } from "@/interfaces";
import ShowInfo from "@/components/ShowInfo";

jest.mock("axios");

describe("ShowInfo Component", () => {
  it("should render ShowInfo", async () => {
    (axios.get as jest.Mock).mockResolvedValue(mockShowWithCast)();
    const show: Show = await axios.get(
      "https://api.tvmaze.com/shows/1?embed=cast"
    );
    render(ShowInfo(show));

    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();
    expect(show).toHaveProperty("_embedded.cast");
    expect(screen.queryByText("Loading...")).toBeNull();
    expect(screen.queryByText("DetailsHeader")).toBeNull();
    expect(screen.queryByText("ShowInfo")).toBeNull();
  });
});
