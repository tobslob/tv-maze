import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-200 pb-8 sm:pb-32 pt-8 sm:pt-[5.625rem] px-8 sm:px-[6.25rem]">
      <h1 className="text-3xl sm:text-4xl font-bold">TV Bland</h1>
      <div className="text-gray-500 text-xl mt-8 mb-0 sm:mb-12">
        <p className="sm:mb-1 mb-0 w-full">TV Show and web series database</p>
        <p className="text-500 w-full sm:w-2/5">
          Create personalized schedule. Episode guide, cast, crew and character
          information.
        </p>
      </div>
    </div>
  );
};

export default Header;
