import { Episode, Show } from "@/interfaces";

export const mockEpisodes: Episode[] = [
  {
    id: 1,
    number: 1,
    show: {
      id: 1,
      name: "film titan",
      summary: "Summary 1",
      genres: ["Horror", "Documentary", "Thriller"],
      status: "Running",
      runtime: 120,
      officialSite: "https://www.film.com",
      image: {
        medium: "film.png",
        original: "film.png",
      },
      schedule: {
        time: "15:00",
        days: ["Wednesday"],
      },
      rating: {
        average: 7.1,
      },
      network: {
        name: "Network 1",
      },
    },
  },
  {
    id: 2,
    number: 30,
    show: {
      id: 1,
      name: "film",
      summary: "film, summary",
      genres: ["Action"],
      status: "Running",
      runtime: 140,
      officialSite: "https://www.film.com",
      image: {
        medium: "/film.png",
        original: "/film.png",
      },
      schedule: {
        time: "18:00",
        days: ["Thursday"],
      },
      rating: {
        average: 5.7,
      },
      network: {
        name: "Network 1",
      },
    },
  },
];

export const mockShowWithCast: Show = {
  id: 1,
  name: "film name",
  summary: "film summary",
  genres: ["Horror", "Documentary", "Thriller"],
  status: "Running",
  runtime: 120,
  officialSite: "https://www.film.com",
  image: {
    medium: "film.png",
    original: "film.png",
  },
  schedule: {
    time: "20:00",
    days: ["Monday"],
  },
  rating: {
    average: 7.1,
  },
  network: {
    name: "Network 1",
  },
  _embedded: {
    cast: [
      {
        person: {
          id: 1,
          name: "Person 1",
          image: {
            medium: "/film.png",
            original: "/film.png",
          },
        },
        character: {
          name: "Character 1",
        },
      },
    ],
  },
};

export const mockShowWithOutCast: Show = {
  id: 1,
  name: "film name",
  summary: "film summary",
  genres: ["Drama", "Action", "Thriller"],
  status: "Running",
  runtime: 60,
  officialSite: "https://www.show1.com",
  image: {
    medium: "/film.png",
    original: "/film.png",
  },
  schedule: {
    time: "20:00",
    days: ["Monday"],
  },
  rating: {
    average: 8.1,
  },
  network: {
    name: "Network 1",
  },
  _embedded: {
    cast: [],
  },
};
