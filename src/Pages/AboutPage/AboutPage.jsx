import React from "react";
import "./AboutPage.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

function AboutPage() {
  var myLongText =
    "Sardar Vallabhbhai Patel Institute Of Technology, Vasad,Has Emerged As The Chieftain Among The Premiere Institutes Of Gujrat For The Last 25 Years.Prakarsh Is One Of The Most Recognized Symposiums All Over Gujrat. It Is A Perfect Launch Pad For Tech Geeks To Showcase Their Inteligence And Innovativeness,And A Massive Platform For Various Activities And Events Combined With Lots Of Entertainment.Prakarsh 2023 Will Be Held On 23-25 Feb And Will Feature An Impressive Lineup of 40 Events, Which Will Incorporate Fun Activities With Ardour.";
  return (
    <div className="ABOUT-US-MAIN-CONTAINER">
      <div className="ABOUT-US-HEADING">
        <h1 className="abouth1">ABOUT US</h1>
      </div>

      <div className="aboutrightcontainer">
        <div className="aboutrightcontent">
          <ReactReadMoreReadLess
            charLimit={200}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {myLongText}
          </ReactReadMoreReadLess>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

// data-aos="fade-left"   data-aos-delay="300"  data-aos-mirror="true"
