import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Nav() {
  const navstyle = {
    color: "white",
  };

  return (
    // <nav>
    //   <h3>Logo</h3>
    //   <ul className="nav-links">
    //     <Link style={navstyle} to="/newtodo">
    //       <li>New Todo</li>
    //     </Link>
    //     <Link style={navstyle} to="/update">
    //       <li>Update Todo</li>
    //     </Link>
    //     <Link style={navstyle} to="/delete">
    //       <li>Delete Todo</li>
    //     </Link>
    //   </ul>
    // </nav>
    /////////
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <li style={{ marginRight: "30px" }} className="nav-item active">
        <Link style={navstyle} to="/">
          <li>
            <h3>ToDo-List</h3>
          </li>
        </Link>
      </li>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li style={{ marginRight: "30px" }} className="nav-item active">
            <Link style={navstyle} to="/newtodo">
              <li>New Todo</li>
            </Link>
          </li>
          <li style={{ marginRight: "30px" }} className="nav-item">
            <Link style={navstyle} to="/update">
              <li>Update Todo</li>
            </Link>
          </li>
          <li style={{ marginRight: "30px" }} className="nav-item">
            <Link style={navstyle} to="/delete">
              <li>Delete Todo</li>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
