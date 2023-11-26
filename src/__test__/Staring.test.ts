import { mockShowWithCast, mockShowWithOutCast } from "@/__mock__/data";
import { render, screen } from "@testing-library/react";
import Cast, { CastProps } from "@/components/Staring";
import axios from "axios";
import { Show } from "@/interfaces";

jest.mock("axios");

describe("Cast Component", () => {
  it("renders the component with a list of cast members", async () => {
    (axios.get as jest.Mock).mockResolvedValue(mockShowWithCast)();
    const show: Show = await axios.get(
      "https://api.tvmaze.com/shows/1?embed=cast"
    );
    render(Cast(show?._embedded as CastProps));
    expect(screen.getByText("Starring")).toBeInTheDocument();

    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();

    show._embedded?.cast.forEach((castMember) => {
      expect(screen.getByText(castMember.person.name)).toBeInTheDocument();
    });
  });

  it("renders the component with an empty cast list", async () => {
    (axios.get as jest.Mock).mockResolvedValue(mockShowWithOutCast)();
    const show: Show = await axios.get(
      "https://api.tvmaze.com/shows/1?embed=cast"
    );
    render(Cast(show?._embedded as CastProps));
    expect(screen.getByText("Starring")).toBeInTheDocument();
  });
});
