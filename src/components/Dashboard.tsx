import React from "react";
import List from "./List";
import Header from "./Header";

const items = [
  {
    id: 1,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 2,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 3,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 4,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 5,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 6,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 7,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 8,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 9,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 10,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
  {
    id: 11,
    name: "Lord of the ring",
    title: "This is the title of the movie which is very long, isn't it?",
  },
];
const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <List items={items} />
    </div>
  );
};

export default Dashboard;
