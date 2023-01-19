import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
function Navbar() {
  return (
    // <div className="navbar">
    //
    //   <div className="navcontent">
    //     <ul className="navicons">
    //       {/* <li className='navitem active'> <a href="#">
    //              <img src="assets/user.png" className=' user' alt="" /></a></li> */}

    //       <li className="navitem">
    //         {" "}
    //
    //       </li>

    //       <li>
    //
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="#">
          <div className="logo">
            <img src="assets/prakarshlogo2.0.svg" alt="Prakarsh-Logo" />
          </div>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <a href="#"> HOME </a>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <a href="#"> ABOUT US </a>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <a href="#"> EVENTS </a>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <a href="#"> SPONSER </a>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <a href="#"> CREW</a>
              </a>
            </li>

            <li class="nav-item">
              <a href="#">
                <AiOutlineShoppingCart className="cart" />
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <button type="button" className="signupbtn">
                  {" "}
                  <a href="#"> SIGN UP </a>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
