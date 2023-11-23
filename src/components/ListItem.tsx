import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Episode as ShowType } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ratingScore, stars } from "../utils";

const ListItem = ({ number, show: { id, name, rating, image } }: ShowType) => {
  return (
    <Link href={`/show/${id}`} className="w-40 h-72 ">
      <div className="w-full  bg-gray-400">
        <Image
          src={image?.medium || "/assets/bookimage.jpeg"}
          alt="Image 1"
          width={400}
          height={300}
          placeholder="blur"
          blurDataURL="/assets/bookimage.jpeg"
        />
      </div>
      <div className="flex mt-2 mb-2">
        {stars.map((_, index) => (
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: index < ratingScore(rating) ? "orange" : "gray" }}
          />
        ))}
      </div>

      <p className="text-sm leading-5">{name}</p>
    </Link>
  );
};

export default ListItem;
