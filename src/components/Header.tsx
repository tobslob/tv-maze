import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8">TV Bland</h1>
      <div className="rounded-md text-gray-500 mb-12">
        <p className="text-sm">TV Show and web series database</p>
        <p className="text-500">
          Create personalized schedule. Episode guide, cast, crew and character
          information.
        </p>
      </div>
      <h1 className="mb-8">Last Added Shows</h1>
    </div>
  );
};

export default Header;
