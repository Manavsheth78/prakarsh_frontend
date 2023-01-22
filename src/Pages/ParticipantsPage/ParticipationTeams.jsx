import React from "react";
import "./ParticipantsPage.css";
// import { GitHub } from "@material-ui/icons";
// import { LinkedIn } from "@mui/icons-material";
const CoreTeam = (props) => {
  return (
    <div
      data-aos={props.item.Animation}
      data-aos-delay="250"
      className="CORE-COMITEE-CONTAINER"
    >
      <img
        src={`${props.item.photo}`}
        className="CORE-COMMITEE-IMAGE"
        alt="Commity Member"
      />
      <div className="MEMBER-INFORMATION">
        <div className="MEMBERS-NAME-STATUS">
          <h5 className="MEMBER-NAME">{props.item.name}</h5>
          <h5 className="MEMBER-STATUS">{props.item.post}</h5>
        </div>
        <div className="Social-Icons">
          <a href={props.item.GithubLink}>{/* <GitHub /> */}</a>
          <a href={props.item.LinkedinLink}>{/* <LinkedIn /> */}</a>
        </div>
      </div>
    </div>
  );
};

const WebDevTeam = (props) => {
  return (
    <div className="DEVLOPER-COMITEE-CONTAINER">
      <img src={props.item.MemberPhoto} alt="Commity Member" />
      <div className="MEMBER-INFORMATION">
        <p>
          <h4>{props.item.MemberName}</h4>
          <h4>{props.item.MemberPosition}</h4>
        </p>
        <a href="/">{props.item.MemberLink}</a>
      </div>
    </div>
  );
};

const GraphicsTeam = (props) => {
  return (
    <div className="GRAPHICS-COMITEE-CONTAINER">
      <img src={props.item.MemberPhoto} alt="Commity Member" />
      <div className="MEMBER-INFORMATION">
        <p className="MEMBER-INFO-PARAGRAPH">
          <h4>{props.item.MemberName}</h4>
          <h4>{props.item.MemberPosition}</h4>
        </p>
        <a href="/">{props.item.MemberLink}</a>
      </div>
    </div>
  );
};

export { CoreTeam, WebDevTeam, GraphicsTeam };
