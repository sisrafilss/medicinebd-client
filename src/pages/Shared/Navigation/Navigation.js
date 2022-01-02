import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg header-nav shadow-lg">
      <div class="container-fluid">
        <img src="https://medicina.aftermotion.com/color-1/images/logo.png" alt="" width="150" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
              <a class="nav-link dropdown-toggle topic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item topic" href="#">Action</a></li>
                <li><a class="dropdown-item topic" href="#">Another action</a></li>
                <li><hr class="dropdown-divider topic" /></li>
                <li><a class="dropdown-item topic" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to="" className="nav-link topic">
                All Products
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle topic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item topic" href="#">Action</a></li>
                <li><a class="dropdown-item topic" href="#">Another action</a></li>
                <li><hr class="dropdown-divider topic" /></li>
                <li><a class="dropdown-item topic" href="#">Something else here</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <Link to="" className="nav-link topic">
                pages
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <button className="login-btn"><Link to="/login" className="login">Login</Link></button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
