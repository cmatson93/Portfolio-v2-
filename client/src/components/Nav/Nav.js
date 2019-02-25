import React from "react";
import './Nav.css';

const Nav = props => {
  return (
    <div className="nav">
      <div className="nav-div">
        <p onClick={() => props.onClick("home")}>logo</p>
      </div>
      <div className="nav-div">
       <button onClick={() => props.onClick("about")}>About</button>
       <button onClick={() => props.onClick("contact")}>Contact</button>
       <button onClick={() => props.onClick("portfolio")}>Portfolio</button>
      </div>
      
    </div>
  )
};

export default Nav;