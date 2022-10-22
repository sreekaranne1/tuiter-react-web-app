import React from "react";

function TuitStats({ comments, retweets, likes, liked }) {
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
        {liked ? (
          <i class={"bi bi-heart-fill " + like}></i>
        ) : (
          <i class="bi bi-heart"></i>
        )}{" "}
        <span className="wd-content">{likes}</span>
      </div>
      <div className="col">
        <i class="bi bi-upload"></i>
      </div>
    </div>
  );
}

export default TuitStats;
