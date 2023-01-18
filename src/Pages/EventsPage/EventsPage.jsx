import React from "react";
import EventsName from "./EventsName";
import "./EventsPage.css";
const Events = [
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_1",
    EventimageSource: "assets/EventImages/01.jpg",
    EventDiscription: "CYBER INTRUSION",
    key: 1,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_2",
    EventimageSource: "assets/EventImages/02.jpg",
    EventDiscription: "CIRCUITRICKS",
    key: 2,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_3",
    EventimageSource: "assets/EventImages/03.jpg",
    EventDiscription: "STRUCTONICS",
    key: 3,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_4",
    EventimageSource: "assets/EventImages/04.jpg",
    EventDiscription: "WHEELS & WINGS",
    key: 4,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_5",
    EventimageSource: "assets/EventImages/05.jpg",
    EventDiscription: "DEXTER'S LAB",
    key: 5,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_6",
    EventimageSource: "assets/EventImages/06.jpg",
    EventDiscription: "WORKSHOPS",
    key: 6,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_7",
    EventimageSource: "assets/EventImages/07.jpg",
    EventDiscription: "ANCILLARY",
    key: 7,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-2",
    id: "EVENT_8",
    EventimageSource: "assets/EventImages/08.jpg",
    EventDiscription: "S.H.A.R.K.S",
    key: 8,
  },
  {
    className: "EVENT-ITEM-CONTAINER",
    subClassName: "row-1",
    id: "EVENT_9",
    EventimageSource: "assets/EventImages/09.jpg",
    EventDiscription: "FUNTASTIC",
    key: 9,
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
