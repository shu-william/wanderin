// Button that navigates to Home page
// Button that navigates to Login/Registration page
// Button that navigates to user's Saves page
// Button that navigates to Create A New Post page
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to={"/"} className="nav-link mx-3">
            Home
          </Link>

          <Link to={"/new"} className="nav-link mx-3">
            New Post
          </Link>

          <Link to={"/saves"} className="nav-link mx-3">
            Saved Posts
          </Link>
          
          <Link to={"/login"} className="nav-link mx-3">
            Login
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
