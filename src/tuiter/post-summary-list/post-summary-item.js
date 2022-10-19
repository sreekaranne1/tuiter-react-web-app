import React from "react";

function PostSummaryItem({ post }) {
  return (
    <li class="list-group-item">
      <div class="row">
        <div class="col-9">
          <div class="text-secondary">{post.topic}</div>
          <div class="fw-bolder ">
            {post.userName}{" "}
            <span>
              <i class="bi bi-check-circle-fill text-primary"></i>
            </span>
            <span class="text-secondary"> - {post.time}</span>
          </div>
          <div class="text-secondary">{post.title}</div>
        </div>
        <div class="col-3">
          <img
            src={post.image}
            alt=""
            class="float-end rounded"
            height="100px"
          />
        </div>
      </div>
    </li>
  );
}

export default PostSummaryItem;
