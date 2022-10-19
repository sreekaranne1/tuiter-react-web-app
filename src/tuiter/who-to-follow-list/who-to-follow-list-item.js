import React from "react";
const WhoToFollowListItem = ({ who }) => {
  return (
    <li className="list-group-item list-group-item-action">
      <div className="row">
        <div className="col-2">
          <img
            src={who.avatarIcon}
            alt=""
            className="rounded-circle mt-1"
            height="35px"
            width="35px"
          />
        </div>
        <div className="col-8 col-lg-6">
          <div className="fw-bolder">
            {who.userName}{" "}
            <span>
              <i className="bi bi-check-circle-fill text-primary"></i>
            </span>
          </div>
          <div className="text-secondary">@{who.handle}</div>
        </div>
        <div className="col-3 col-lg-4">
          <button className="btn btn-primary w-100 mt-1 rounded-pill">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
