import React from "react";
import EventsName from "./EventsName";
import "./EventsPage.css";
import { GiAbstract019 } from "react-icons/gi";
const Events = [
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_1",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "CYBER INTRUSION",
    key: 1,
    Animation: "fade-right",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_2",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "CIRCUITRICKS",
    key: 2,
    Animation: "flip-up",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_3",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "STRUCTONICS",
    key: 3,
    Animation: "fade-left",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_4",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "WHEELS & WINGS",
    key: 4,
    Animation: "fade-right",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_5",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "DEXTER'S LAB",
    key: 5,
    Animation: "flip-up",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_6",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "WORKSHOPS",
    key: 6,
    Animation: "fade-left",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_7",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "ANCILLARY",
    key: 7,
    Animation: "fade-right",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_8",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "S.H.A.R.K.S",
    key: 8,
    Animation: "flip-up",
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_9",
    EventimageSource: "assets/EventImages/01.png",
    EventDiscription: "FUNTASTIC",
    key: 9,
    Animation: "fade-left",
  },
];
const EventsPage = () => {
  return (
    <>
      <div className="EVENTS_CONTAINER">
        <h1 className="EVENTS_HEADER_MAIN">EVENTS</h1>
        <p className="EVENTS_HEADING_MAIN">
          come join the thrill,bring your friends too.
        </p>
        <div className="EVENTS_FLEX_CONTAINER">
          {Events.map((members) => (
            <EventsName
              item={members}
              src={members.EventimageSource}
              EventDiscription={members.EventDiscription}
              key={members.key}
              subClassName={members.subClassName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
