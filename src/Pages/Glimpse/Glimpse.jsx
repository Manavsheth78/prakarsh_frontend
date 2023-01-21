import React from "react";
import "./Glimpse.css";
function Glimpse(props) {
  return (
    <div data-aos={props.item.Animation}>
      <img src={props.item.EventimageSource} alt="" />
    </div>
  );
}

export default Glimpse;
