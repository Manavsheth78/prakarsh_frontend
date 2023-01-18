import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="assets/prakarshlogo2.0.svg" alt="Prakarsh-Logo" />
      </div>
      <div className="navcontent">
        <ul className="navicons">
          {/* <li className='navitem active'> <a href="#">
                 <img src="assets/user.png" className=' user' alt="" /></a></li> */}

          <li className="navitem">
            {" "}
            <a href="#">
              <img src="assets/shopcart.svg" className="cart" alt="" />
            </a>
          </li>

          <li>
            <button type="button" className="signupbtn">
              {" "}
              <a href="#"> SIGN UP </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
