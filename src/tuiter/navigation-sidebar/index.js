import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2];
  return (
    <div>
      <div className="list-group">
        <a className="list-group-item">
          <i class="bi bi-twitter"></i>
        </a>
        <Link
          to="/tuiter/home"
          className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
        >
          <i class="bi bi-house-fill"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Home
          </span>
        </Link>
        <Link
          to="/tuiter/explore"
          className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
        >
          <i class="bi bi-hash"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Explore
          </span>
        </Link>
        <Link to="/" className="list-group-item">
          <i className="bi bi-arrow-left"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Labs
          </span>
        </Link>
        <Link
          to="notification.html"
          className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
        >
          <i class="bi bi-bell-fill"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Notifications
          </span>
        </Link>
        <Link
          to="messages.html"
          className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
        >
          <i class="bi bi-envelope-fill"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Messages
          </span>
        </Link>
        <Link
          to="bookmarks.html"
          className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
        >
          <i class="bi bi-bookmark-fill"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Bookmarks
          </span>
        </Link>
        <Link
          to="list.html"
          className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
        >
          <i class="bi bi-card-list"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Lists
          </span>
        </Link>
        <Link
          to="profile.html"
          className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
        >
          <i class="bi bi-person-fill"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            Profile
          </span>
        </Link>
        <Link
          to="more.html"
          className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
        >
          <i class="bi bi-circle-fill"></i>
          <span class="d-none d-xl-inline d-xxl-inline d-sm-none d-lg-none d-md-none ps-2">
            More
          </span>
        </Link>
      </div>
      <button class="btn btn-primary w-100 mt-1 rounded-pill ">Tuit</button>
    </div>
  );
};
export default NavigationSidebar;
