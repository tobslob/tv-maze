import { listItems } from "@/utils";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

type StarProps = {
  score: number;
};

const Star = ({ score }: StarProps) => {
  return (
    <>
      {listItems(5).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="w-3 h-3"
          style={{ color: index < score ? "#878787" : "#CBCBCB" }}
        />
      ))}
    </>
  );
};

export default memo(Star);
