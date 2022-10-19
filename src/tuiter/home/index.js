import React from "react";
import posts from "./posts.json";
import HomeCompanentItem from "./HomeCompanentItem";
const HomeComponentList = () => {
  return (
    <ul className="list-group">
      {posts.map((post) => (
        <HomeCompanentItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default HomeComponentList;
