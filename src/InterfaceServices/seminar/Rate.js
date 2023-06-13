import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Rate = ({ setSearchRate = () => {}, rate }) => {
  const stars = (x) => {
    let star = [];
    for (let i = 0; i <6; i++) {
      if (i < x) {
        star.push(
          <span
            className="rating"
            key={i}
            onClick={() => {
              i == 0 ? setSearchRate(0) : setSearchRate(i + 1);
            }}
            style={{ cursor: "pointer" }}
          >
            <AiFillHeart />
          </span>
        );
      } else {
        star.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => setSearchRate(i + 1)}
          >
            <AiOutlineHeart />
          </span>
        );
      }
    }
    return star;
  };
  return <div>{stars(rate)}</div>;
};

export default Rate;
