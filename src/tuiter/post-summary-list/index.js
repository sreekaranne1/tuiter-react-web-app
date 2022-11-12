import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostSummaryItem from "./post-summary-item.js";
import { findTuitsThunk } from "../../services/tuits-thunks.js";

const PostSummaryList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
