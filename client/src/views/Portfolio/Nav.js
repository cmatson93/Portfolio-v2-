import React from "react";
import './Nav.css';

const Nav = props => {
  return (
    <div className="nav">
      <div className="nav-div">
        <p>logo</p>
        <p>File</p>
        <p>View</p>
      </div>
      <div className="nav-div">
        <p>Christina Ng</p>
      </div>
      <div className="nav-div">
        <p>--</p>
        <p>X</p>
      </div>
      
    </div>
  )
};

export default Nav;