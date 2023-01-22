import React from "react";
import "./HomePage.css";
import "../Navbar/Navbar.css";
function HomePage() {
  return (
    <div className="HOMEPAGE-MAIN-CONTAINER">
      <div className="headerline">
        <h1 className="prakarsh">
          {" "}
          PRAKARSH'<span>23</span>
        </h1>
        <h2> ENGAGING mINds, eMpowERiNg sUccEss</h2>
        <p>
          {" "}
          Prakarsh 23's vision is to assist the rural areas, and villages and to
          encourage them in the advancement of their lives through technologies
          developed in Prakarsh by students.{" "}
        </p>

        {/* <button type="button" className="signupbtn expbtn">
          <a href="#">Explore Events </a>{" "}
        </button> */}

        <div className="launch">
          <h1 className="glow"> coming soon...</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
