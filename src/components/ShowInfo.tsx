import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ShowInfo: React.FC = () => {
  return (
    <div className="flex justify-between p-8 w-9/12">
      <div className="flex flex-col w-4/12">
        <h3>Show info</h3>
        <ul className="mt-4">
          <li className="flex justify-between items-center h-10 border-b border-gray-500">
            <p>Streamed on</p> <p className="text-gray-500">BBC Three</p>
          </li>
          <li className="flex justify-between items-center h-10 border-b border-gray-500">
            <p>Streamed on</p> <p className="text-gray-500">BBC Three</p>
          </li>
          <li className="flex justify-between items-center h-10 border-b border-gray-500">
            <p>Streamed on</p> <p className="text-gray-500">BBC Three</p>
          </li>
          <li className="flex justify-between items-center h-10 border-b border-gray-500">
            <p>Streamed on</p> <p className="text-gray-500">BBC Three</p>
          </li>
          <li className="flex justify-between items-center h-10 border-b border-gray-500">
            <p>Streamed on</p> <p className="text-gray-500">BBC Three</p>
          </li>
        </ul>
      </div>
      {/* Starring */}
      <div className="flex flex-col w-4/12">
        <h3>Starring</h3>
        <ul className="mt-4">
          <li className="flex justify-start gap-8 items-center h-10 border-b border-gray-500">
            <div className="flex justify-start w-2/3 items-center">
              <FontAwesomeIcon icon={faUser} className="mr-4" />
              <p>Streamed on</p>
            </div>
            <p className="text-gray-500">Victoria </p>
          </li>
          <li className="flex justify-start gap-8 items-center h-10 border-b border-gray-500">
            <div className="flex justify-start w-2/3 items-center">
              <FontAwesomeIcon icon={faUser} className="mr-4" />{" "}
              <p>Streamed on</p>
            </div>
            <p className="text-gray-500">Carol</p>
          </li>
          <li className="flex justify-start gap-8 items-center h-10 border-b border-gray-500">
            <div className="flex justify-start w-2/3 items-center">
              <FontAwesomeIcon icon={faUser} className="mr-4" />
              <p>Streamed on</p>{" "}
            </div>
            <p className="text-gray-500">Beats</p>
          </li>
          <li className="flex justify-start gap-8 items-center h-10 border-b border-gray-500">
            <div className="flex justify-start w-2/3 items-center">
              <FontAwesomeIcon icon={faUser} className="mr-4" />
              <p>Streamed on</p>
            </div>{" "}
            <p className="text-gray-500">Grindah</p>
          </li>
          <li className="flex justify-start gap-8 items-center h-10 border-b border-gray-500">
            <div className="flex justify-start w-2/3 items-center">
              <FontAwesomeIcon icon={faUser} className="mr-4" />
              <p>Daniel Sylvester Woolford</p>
            </div>{" "}
            <p className="text-gray-500">Decoy</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShowInfo;
