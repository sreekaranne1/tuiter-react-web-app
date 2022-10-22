import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { editProfile } from "../profile/profile-reducer";

function EditProfile() {
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [dob, setDob] = useState(profile.dateOfBirth);

  const changeHandler = (e) => {
    const name = e.target.value;
    const nameArr = name.split(" ");
    setFirstName(nameArr[0]);
    setLastName(nameArr[1] ? nameArr[1] : "");
  };

  const saveHandler = (e) => {
    dispatch(editProfile({ firstName, lastName, bio, location, dob }));
    navigate("/tuiter/profile");
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-1 pt-1">
          <Link to="/tuiter/profile">
            <i className="bi bi-x-lg "></i>
          </Link>
        </div>
        <div className="col-8 pe-0 me-0">
          <div className="fw-bolder fs-5">Edit Profile</div>
        </div>
        <button
          type="button"
          className="col-2 btn btn-dark rounded-pill ms-4"
          onClick={saveHandler}
        >
          save
        </button>
      </div>
      <div className="position-relative">
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
      <div className="border" style={{ marginTop: "80px" }}>
        <div className="text-secondary ms-1" style={{ fontSize: "13px" }}>
          Name
        </div>
        <input
          type="text"
          className="w-100"
          required
          value={firstName + " " + lastName}
          style={{ borderColor: "transparent" }}
          onChange={changeHandler}
        />
      </div>
      <div className="border mt-4">
        <div className="text-secondary ms-1" style={{ "font-size": "13px" }}>
          Bio
        </div>
        <textarea
          type="textarea"
          value={bio}
          className="w-100"
          required
          style={{
            borderColor: "transparent",
          }}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <div className="border mt-4">
        <div className="text-secondary ms-1" style={{ "font-size": "13px" }}>
          Location
        </div>
        <input
          type="text"
          required
          className="w-100"
          value={location}
          style={{ borderColor: "transparent" }}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="border mt-4">
        <div className="text-secondary ms-1" style={{ "font-size": "13px" }}>
          Birth Date (Month Date, Year)
        </div>
        <input
          type="textarea"
          required
          value={dob}
          style={{ borderColor: "transparent" }}
          className="w-100"
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
    </>
  );
}

export default EditProfile;
