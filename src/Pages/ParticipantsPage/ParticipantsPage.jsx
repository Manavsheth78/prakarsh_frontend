import React from "react";
import "./ParticipantsPage.css";
import { CoreTeam, WebDevTeam, Designer } from "./ParticipationTeams";

const CoreCommity = {
  CoreMembersDetails: [
    {
      name: "Rudra Patel",
      post: "co-ordinator",
      key: 1,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 2,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 3,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "rauhl",
      post: "co-ordinator",
      key: 4,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 5,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "ajay",
      post: "co-ordinator",
      key: 6,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 7,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 8,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 9,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 10,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 11,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 12,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 13,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 14,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 15,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
    {
      name: "tohan",
      post: "co-ordinator",
      key: 16,
      photo: "/assets/CommityMembers/01.jpg",
      LinkedinLink: "https://google.com",
      GithubLink: "https://google.com",
    },
  ],
};

const ParticipantsPage = () => {
  return (
    <div className="PARTICIAPTION-TEAMS-MAIN-CONTAINER">
      <h1 className="PARTICIAPTION-PAGE-HEADING">
        THE TEAM THAT MADE IT POSSIBLE
      </h1>
      <p className="NAVIGATION-LINE">
        <a href="/">CORE TEAM</a>
        <a href="/">DEVLOPER</a>
      </p>
      <div className="COMMITEE-MEMBER-CONTAINER DEVLOPER-CONTAINER GRAPHICS-CONTAINER">
        {CoreCommity.CoreMembersDetails.map((items) => (
          <CoreTeam item={items} key={items.key} photo={items.photo} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsPage;
