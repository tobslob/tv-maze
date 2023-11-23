import { Person } from "@/interfaces";
import Image from "next/image";

const Character = ({ person, character }: Person) => {
  return (
    <div className="flex gap-x-5 items-center text-sm md:text-base">
      <div className="w-14 h-14 rounded-full relative">
        <Image
          src={
            person.image && person.image.medium
              ? person.image.medium
              : "/assets/show-cover.jpg"
          }
          fill
          alt={person.name}
          className="object-cover object-top rounded-full"
          sizes="64px"
        />
      </div>
      <p className="text-white">
        {person.name} as <span className="text-red-800">{character.name}</span>
      </p>
    </div>
  );
};

export default Character;
