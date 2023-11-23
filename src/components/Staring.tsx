import React from "react";
import { Person } from "../interfaces";
import Character from "./Character";

interface CastProps {
  cast: Person[];
}
const Cast = ({ cast }: CastProps) => {
  return (
    <div>
      <h2 className="text-2xl">Starring</h2>
      <ul className="space-y-5 mt-5 md:mt-10">
        {cast.map((person) => (
          <li key={person.person.id}>
            <Character {...person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
