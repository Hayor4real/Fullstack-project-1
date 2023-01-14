import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar style={{ color: "yellow" }} className="starIcon" />
        ) : stars >= number ? (
          <FaStarHalfAlt style={{ color: "yellow" }} className="starIcon" />
        ) : (
          <AiOutlineStar style={{ color: "yellow" }} className="starIcon" />
        )}
      </span>
    );
  });

  return <div className="icon-style">{ratingStar}</div>;
};
export default Star;
