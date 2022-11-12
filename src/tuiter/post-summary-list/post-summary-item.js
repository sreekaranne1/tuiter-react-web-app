import React from "react";

function PostSummaryItem({ post }) {
  console.log(post);
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-9">
          <div className="text-secondary">{post.topic}</div>
          <div className="fw-bolder ">
            {post.username}{" "}
            <span>
              <i className="bi bi-check-circle-fill text-primary"></i>
            </span>
            <span className="text-secondary"> - {post.time}</span>
          </div>
          <div className="text-secondary">{post.title}</div>
        </div>
        <div className="col-3">
          <img
            src={`images/${post.image}`}
            alt="hello"
            className="float-end rounded"
            height="100px"
          />
        </div>
      </div>
    </li>
  );
}

export default PostSummaryItem;
