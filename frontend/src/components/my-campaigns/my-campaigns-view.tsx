import React, { useState } from "react";
import ActiveCampaignsBox from "./my-campaigns-box";
import { CampaignsBoxEmpty } from "./my-campaigns-box";
import { getDeadline } from "../../utils/utils";
import ActiveCampaignsView from "../active-campaign/active-campaign-view";

const campaigns = [
  {
    title: "Token Giveaway",
    imageURL:
      "https://img.freepik.com/free-photo/medical-pill-with-bitcoin-sign-pink-background-bitcoin-technology-concept-medicine_535844-1506.jpg?w=2000",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: "21",
    drawMethod: "0",
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 6)),
    participants: "189",
    drawMethod: "0",
  },
  {
    title: "Token Giveaway #2",
    imageURL:
      "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvNTg3NTgxZjItNjE3Yi00MDRiLWIzNTgtOGI0NjM2ZDQzOTRiLmpwZw==.jpg",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 5)),
    participants: "12",
    drawMethod: "0",
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: "189",
    drawMethod: "0",
  },
];

const MyCampaignsView = () => {
  return (
    <>
      <ActiveCampaignsView firstTab={"created"} secondTab={"drafts"} />
    </>
  );
};

export default MyCampaignsView;
