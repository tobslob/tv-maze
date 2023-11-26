import { Person } from "@/interfaces";
import Character from "./Character";

export interface CastProps {
  cast: Person[];
}
const Cast = ({ cast }: CastProps) => {
  return (
    <div>
      <h2 className="text-2xl mb-5">Starring</h2>
      <ul className="sm:divide-y divide-black">
        {cast.map((person) => (
          <li key={person.person.id} className="flex items-center gap-x-3 py-[1.125rem] px-1">
            <Character {...person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
