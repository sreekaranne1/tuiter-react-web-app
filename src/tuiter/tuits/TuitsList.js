import React from "react";
import TuitItem from "./TuitItem";
import { useSelector } from "react-redux";
const TuitsList = () => {
  const tuits = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {tuits.map((post) => (
        <TuitItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default TuitsList;
