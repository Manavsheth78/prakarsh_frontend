import React from "react";
import "./EventsPage.css";
function EventsName(props) {
  return (
    <div
      data-aos={props.item.Animation}
      data-aos-delay="100"
      className={`EVENT-ITEM-CONTAINER ${props.item.subClassName}`}
    >
      <img src={props.item.EventimageSource} alt="" />
      <p>{props.item.EventDiscription}</p>
    </div>
  );
}

export default EventsName;
