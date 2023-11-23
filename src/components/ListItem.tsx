import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Show } from "@/interfaces";

type Props = {
  data: Show;
};

const ListItem = ({ data }: Props) => (
  <Link href="/show/[id]" as={`/show/${data.id}`} className="w-40 h-72 ">
    <div className="w-full  bg-gray-400">
      <Image
        src="/assets/show-cover.jpg"
        alt="Image 1"
        width={400}
        height={300}
      />
    </div>
    <div className="flex mt-2 mb-2">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>

    <p className="text-sm leading-5">{data.title}</p>
  </Link>
);

export default ListItem;
