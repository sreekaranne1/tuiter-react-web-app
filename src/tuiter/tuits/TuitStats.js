import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

function TuitStats({ comments, retweets, likes, liked, post }) {
  const dispatch = useDispatch();
  const unLikeHandler = () => {
    dispatch(
      updateTuitThunk({
        ...post,
        dislikes: post.dislikes + 1,
      })
    );
  };
  const likeHandler = () => {
    dispatch(
      updateTuitThunk({
        ...post,
        likes: post.likes + 1,
      })
    );
  };
  const like = liked ? "text-danger" : "";
  return (
    <div className="row mt-2 text-secondary">
      <div className="col">
        <i class="bi bi-chat"></i> <span className="">{comments}</span>
      </div>
      <div className="col">
        <i class="bi bi-recycle"></i> <span className="">{retweets}</span>
      </div>
      <div className="col">
        <i
          onClick={likeHandler}
          className="bi bi-heart-fill me-2 text-danger"
        ></i>
        {post.likes}
      </div>
      <div className="col">
        <i
          onClick={unLikeHandler}
          className="bi bi-hand-thumbs-down-fill me-2 text-danger"
        ></i>
        {post.dislikes}
      </div>
      <div className="col">
        <i class="bi bi-upload"></i>
      </div>
    </div>
  );
}

export default TuitStats;
