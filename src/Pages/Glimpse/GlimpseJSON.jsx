import React from "react";
import Glimpse from "./Glimpse";
import "./Glimpse.css";
const Events = [
  {
    EventimageSource: "assets/Glimpse/image (1).JPG",
    key: 1,
    Animation: "fade-right",
  },
  {
    EventimageSource: "assets/Glimpse/image (2).JPG",
    key: 2,
    Animation: "flip-up",
  },
  {
    EventimageSource: "assets/Glimpse/image (10).JPG",
    key: 3,
    Animation: "fade-left",
  },
  {
    EventimageSource: "assets/Glimpse/image (4).jpg",
    key: 4,
    Animation: "fade-right",
  },
  {
    EventimageSource: "assets/Glimpse/image (5).jpg",
    key: 5,
    Animation: "flip-up",
  },
  {
    EventimageSource: "assets/Glimpse/image (11).JPG",
    key: 6,
    Animation: "fade-left",
  },
  {
    EventimageSource: "assets/Glimpse/image (7).JPG",
    key: 7,
    Animation: "fade-right",
  },
  {
    EventimageSource: "assets/Glimpse/image (8).JPG",
    key: 8,
    Animation: "flip-up",
  },
  {
    EventimageSource: "assets/Glimpse/image (9).JPG",
    key: 9,
    Animation: "fade-left",
  },
  //   {
  //     EventimageSource: "assets/Glimpse/image (3).jpg",
  //     key: 10,
  //     Animation: "fade-right",
  //   },
  //   {
  //     EventimageSource: "assets/Glimpse/image (6).JPG",
  //     key: 11,
  //     Animation: "fade-left",
  //   },
];
const GlimpseJSON = () => {
  return (
    <>
      <div className="maindiv">
        <h1>GLIMPSE</h1>
        <div className="images">
          {Events.map((members) => (
            <Glimpse
              item={members}
              src={members.EventimageSource}
              key={members.key}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GlimpseJSON;
