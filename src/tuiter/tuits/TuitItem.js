import React from "react";
import "./index.css";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

function TuitItem({ post }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item wd-backcolor">
      <div className="row">
        <div className="col-1">
          <img
            src={`images/${post.image}`}
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
                {post.handle} . {post.time}
              </span>
              <i
                className="bi bi-x-lg float-end"
                onClick={() => deleteTuitHandler(post._id)}
              ></i>
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
            <TuitStats
              post={post}
              liked={post.liked}
              comments={post.replies}
              retweets={post.retuits}
              likes={post.likes}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default TuitItem;
