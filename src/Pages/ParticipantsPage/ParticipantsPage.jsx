import React from "react";
import "./ParticipantsPage.css";
import { CoreTeam, WebDevTeam, Designer } from "./ParticipationTeams";

const CoreMembers = [
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "https://google.com",
    key: 1,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "https://google.com",
    key: 2,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "https://google.com",
    key: 3,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "https://google.com",
    key: 4,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "https://google.com",
    key: 5,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "https://google.com",
    key: 6,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 7,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 8,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 9,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 10,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 11,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 12,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 13,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 14,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 15,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 16,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 17,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 18,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "",
    key: 19,
  },
  {
    MemberPhoto: "assets/CommityMembers/CoreCommityMembers/01.jpg",
    Name: "Name",
    Position: "chief coordinator",
    Link: "LINK",
    key: 20,
  },
];

const ParticipantsPage = () => {
  return (
    <div className="PARTICIAPTION-TEAMS-MAIN-CONTAINER">
      <h1 className="PARTICIAPTION-PAGE-HEADING">
        THE TEAM THAT MADE IT POSSIBLE
      </h1>
      <p className="NAVIGATION-LINE">
        <a href="/">CORE TEAM</a>
        <a href="/">DEVLOPER</a>
        <a href="/">GRAPHICS</a>
      </p>
      <div className="COMMITEE-MEMBER-CONTAINER DEVLOPER-CONTAINER GRAPHICS-CONTAINER">
        {CoreMembers.map((members) => (
          <CoreTeam
            item={members}
            src={members.MemberPhoto}
            MemberName={members.Name}
            MemberPosition={members.Position}
            memberLink={members.Link}
            key={members.key}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsPage;
