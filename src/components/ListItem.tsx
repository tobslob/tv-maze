import Star from "@/components/Star";
import Image from "next/image";
import Link from "next/link";
import { Episode as ShowType } from "@/interfaces";
import { ratingScore } from "@/utils";

const ListItem = ({ show: { id, name, rating, image } }: ShowType) => {
  return (
    <Link href={`/show/${id}`}>
      <div className="w-full bg-gray-400">
        <Image
          src={image?.medium || "/assets/show-cover.jpeg"}
          alt={name}
          width={400}
          height={300}
          placeholder="blur"
          blurDataURL="/assets/show-cover.jpeg"
        />
      </div>
      <div className="flex my-2 gap-1">
        <Star score={ratingScore(rating)} />
      </div>

      <p className="text-sm truncate w-full">{name}</p>
    </Link>
  );
};

export default ListItem;
