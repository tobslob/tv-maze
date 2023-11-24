import { Person } from "@/interfaces";
import Image from "next/image";

const Character = ({ person, character }: Person) => {
  return (
    <>
      <div className="w-1/6">
        <div className="w-14 h-14 rounded-full relative">
          <Image
            src={person?.image?.medium || "/assets/show-cover.jpeg"}
            fill
            alt={person.name}
            className="object-cover object-top rounded-full"
            sizes="64px"
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col w-full">
        <p className="text-black w-full sm:w-2/6">
          {person.name}
        </p>
        <p className="text-gray-400">
          {character.name}
        </p>
      </div>
    </>
  );
};

export default Character;
