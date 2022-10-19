import React from "react";
import "./index.css";

function HomeCompanentItem({ post }) {
  console.log(post.userName);
  return (
    <li className="list-group-item wd-backcolor">
      <div className="row">
        {post.retweeted && (
          <div className="ms-4 text-secondary">
            <i class="bi bi-recycle"></i>{" "}
            <span className="ms-3 fs-6">{post.retweeted}</span>
          </div>
        )}
        <div className="col-1">
          <img
            src={post.image}
            alt="hello"
            className="rounded-circle"
            height="48px"
            width="48px"
          />
        </div>
        <div className="col-11">
          <div className="ms-2  fs-6">
            <div>
              <span className="fw-bolder">{post.userName}</span>{" "}
              <i className="bi bi-check-circle-fill text-primary"></i>{" "}
              <span className="text-secondary fs-6">
                @{post.handle} . {post.time}
              </span>
              <i class="bi bi-three-dots wd-grey float-end"></i>
            </div>
            <div className="mb-3">{post.tuit}</div>
            <ul className="list-group rounded">
              {post.image2 && (
                <li className="list-group-item" style={{ padding: "0px" }}>
                  <img
                    src={post.image2}
                    width="100%"
                    alt="iphone"
                    className=""
                  />
                </li>
              )}
              {post.retweet && (
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-12">
                      <div className=" fs-6">
                        <div className="row">
                          <div className="col-12">
                            <img
                              src={post.imageRe}
                              alt="hello"
                              className="rounded-circle inline"
                              height="18px"
                              width="18px"
                            />{" "}
                            <span className="fw-bolder">{post.userNameRe}</span>{" "}
                            <i className="bi bi-check-circle-fill text-primary"></i>{" "}
                            <span className="text-secondary fs-6">
                              @{post.handleRe} . {post.timeRe}
                            </span>
                          </div>
                        </div>
                        <div className="">{post.tuitRe}</div>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
            <div className="row mt-2 text-secondary">
              <div className="col">
                <i class="bi bi-chat"></i>{" "}
                <span className="">{post.comments}</span>
              </div>
              <div className="col">
                <i class="bi bi-recycle"></i>{" "}
                <span className="">{post.retweets}</span>
              </div>
              <div className="col">
                <i className="bi bi-heart"></i>{" "}
                <span className="wd-content">{post.likes}</span>
              </div>
              <div className="col">
                <i class="bi bi-upload"></i>
              </div>
            </div>
            {post.showthisthread && (
              <div className="text-primary mt-3">Show this thread</div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default HomeCompanentItem;
