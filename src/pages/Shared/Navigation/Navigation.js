import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();

  console.log(user);

  return (
    <nav class="navbar navbar-expand-lg header-nav shadow-lg">
      <div class="container-fluid">
        <img
          src="https://medicina.aftermotion.com/color-1/images/logo.png"
          alt=""
          width="150"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <Link to="/home" className="nav-link topic">
              Home
            </Link>
            <li class="nav-item">
              <Link to="" className="nav-link topic">
                About Us
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle topic"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item topic" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item topic" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider topic" />
                </li>
                <li>
                  <a class="dropdown-item topic" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to="allproduct" className="nav-link topic">
                All Products
              </Link>
            </li>

            {user?.email && (
              <li className="nav-item  fitpal-nav-item me-4">
                <Link className="nav-link topic" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}

            {user?.email ? (
              <button
                onClick={logOut}
                style={{ outline: 0, border: 0, borderRadius: "3px" }}
              >
                LogOut
              </button>
            ) : (
              <li className="nav-item fitpal-nav-item me-4">
                <Link className="nav-link topic login-btn" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>

          {user.email && (
            <div className="mx-3">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt=""
              />
              <span className="text-light"> {user?.displayName} </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
