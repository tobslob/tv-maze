import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DetailsHeader: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-200 p-8">
      <h1 className="text-2xl font-bold mb-8">TV Bland</h1>
      <div className="flex rounded-md text-gray-500 mb-4">
        <Image
          src="/assets/show-cover.jpeg"
          alt="Show image"
          width={200}
          height={300}
        />
        <div className="flex flex-col justify-around py-12 w-2/3 ml-8">
          <div className="flex mt-2 mb-2">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h3 className="text-2xl ">
            This is the title of the show and its very very long
          </h3>
          <p className="text-500 w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            inventore recusandae temporibus possimus amet sed officia blanditiis
            autem error enim nihil dolorem, libero incidunt ut magnam quas
            architecto perferendis tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
