import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProfileComponent() {
  const profile = useSelector((state) => state.profile);
  return (
    <>
      <div className="row mb-2">
        <div className="col-1 pt-2">
          <i class="bi bi-arrow-left fa-lg"></i>
        </div>
        <div className="col-11">
          <div className="fw-bolder fs-5">
            {profile.firstName} {profile.lastName}
          </div>
          <div className="text-secondary" style={{ "font-size": "15px" }}>
            5,112 tuites
          </div>
        </div>
      </div>
      <div className="position-relative ">
        <img
          src="/images/myuniverse.jpg"
          alt="startship"
          className="w-100"
          height={300}
        />
        <span className="position-absolute wd-nudge-up text-white">
          <img
            src="/images/react.png"
            alt="tesla"
            width={130}
            height={130}
            className="rounded-circle"
          />
        </span>
      </div>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4">
          {" "}
          <Link to="/tuiter/edit-profile">
            <button
              type="button"
              className="btn btn-light border rounded-pill float-end mt-3 me-3 w-30"
            >
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <div className="ms-4 ">
        <div className="row mt-4">
          <div className="fw-bolder fs-5">
            {profile.firstName} {profile.lastName}
          </div>
          <div className="text-secondary" style={{ "font-size": "15px" }}>
            {profile.handle}
          </div>
        </div>
        <div className="row mt-2">
          <div>{profile.bio}</div>
        </div>
        <div className="row mt-2">
          <div className="col-3 text-secondary">
            <i class="bi bi-geo-alt"></i> {profile.location}
          </div>
          <div className="col-4 text-secondary">
            <i class="bi bi-balloon"></i> Born {profile.dateOfBirth}
          </div>
          <div className="col-4 text-secondary">
            <i class="bi bi-calendar-event"></i> Joined {profile.dateJoined}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <span className="fw-bolder">{profile.followingCount}</span>{" "}
            <span className="text-secondary">Following</span>
          </div>
          <div className="col-3">
            <span className="fw-bolder">{profile.followersCount}</span>{" "}
            <span className="text-secondary">Followers</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileComponent;
