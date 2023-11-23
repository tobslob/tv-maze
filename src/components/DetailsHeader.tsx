import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Show } from "../interfaces";
import { sanitizeHtml } from "../utils";

const DetailsHeader = ({ rating, image, name, summary }: Show) => {
  const sanitizedHtml = sanitizeHtml(summary);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const ratingScore = rating.average ? Math.floor(rating.average / 2) : 0;

  return (
    <div className="flex flex-col bg-gray-200 p-8">
      <Link href="/" className="flex">
        <h1 className="text-2xl font-bold mb-8">TV Bland</h1>
      </Link>
      <div className="flex rounded-md text-gray-500 mb-4">
        <Image
          src={image?.original || "/assets/show-cover.jpeg"}
          alt="Show image"
          width={200}
          height={300}
          loading="eager"
          className="object-cover"
          placeholder="blur"
          blurDataURL="/images/movie-poster-placeholder.png"
          sizes="(max-width: 639px) 90vw, (min-width: 640px) 300px"
        />
        <div className="flex flex-col justify-around py-12 w-2/3 ml-8">
          <div className="flex mt-2 mb-2">
            {stars.map((_, index) => (
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: index < ratingScore ? "orange" : "gray" }}
              />
            ))}
          </div>
          <h3 className="text-2xl ">{name}</h3>
          <div className="text-500 w-2/3">{sanitizedHtml}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
