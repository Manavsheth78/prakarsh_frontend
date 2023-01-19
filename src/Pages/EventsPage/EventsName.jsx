import React from "react";
import "./EventsPage.css";
function EventsName(props) {
  return (
    <div
      data-aos={props.item.Animation}
      data-aos-delay="5000"
      data-aos-duration="4000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      className={`EVENT-ITEM-CONTAINER ${props.item.subClassName}`}
    >
      <img src={props.item.EventimageSource} alt="" />
      <p>{props.item.EventDiscription}</p>
    </div>
  );
}

export default EventsName;
