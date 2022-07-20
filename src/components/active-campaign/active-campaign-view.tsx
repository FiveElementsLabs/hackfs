import React, { useState } from "react";
import ActiveCampaignsBox from "./active-campaign-box";
import { ActiveCampaignsBoxEmpty } from "./active-campaign-box";
import { getDeadline } from "../../utils/utils";

const campaigns = [
  {
    title: "Token Giveaway",
    imageURL:
      "https://img.freepik.com/free-photo/medical-pill-with-bitcoin-sign-pink-background-bitcoin-technology-concept-medicine_535844-1506.jpg?w=2000",
    deadline: getDeadline(new Date(new Date().setDate(new Date().getDate() + 7))).toString(),
    participants: "21",
    drawMethod: "0",
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date(new Date().setDate(new Date().getDate() + 6))).toString(),
    participants: "189",
    drawMethod: "0",
  },
  {
    title: "Token Giveaway #2",
    imageURL:
      "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvNTg3NTgxZjItNjE3Yi00MDRiLWIzNTgtOGI0NjM2ZDQzOTRiLmpwZw==.jpg",
    deadline: getDeadline(new Date(new Date().setDate(new Date().getDate() + 5))).toString(),
    participants: "12",
    drawMethod: "0",
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date(new Date().setDate(new Date().getDate() + 7))).toString(),
    participants: "189",
    drawMethod: "0",
  },
];

const ActiveCampaignsView = () => {
  const [switchCampaign, setSwitchCampaign] = useState(true);

  return (
    <div className="grid max-w-4-xl mx-auto">
      <div className="w-auto mx-auto relative py-8">
        <div className="flex">
          <button
            className={`rounded-[0.45rem] azeret font-medium text-xs uppercase focus:outline-none py-1.5 ${
              switchCampaign
                ? "px-6 bg-tide-lighter text-black z-10 -mr-3 border-2 border-secondary"
                : "pl-6 pr-6 border-none bg-tide-darker z-0 text-white py-[1px]"
            }`}
            onClick={() => setSwitchCampaign(true)}
          >
            activated
          </button>
          <button
            className={`px-2 rounded-[0.45rem] azeret font-medium text-xs uppercase focus:outline-none py-1.5 ${
              !switchCampaign
                ? "px-6 bg-tide-lighter text-black z-10 -ml-3 border-2 border-secondary primary"
                : "pl-6 pr-6 border-none bg-tide-darker z-0 text-white py-[1px]"
            }`}
            onClick={() => setSwitchCampaign(false)}
          >
            participated
          </button>
        </div>
      </div>
      {switchCampaign ? (
        <>
          {campaigns.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {campaigns.map((campaign, id) => (
                <ActiveCampaignsBox key={id} campaign={campaign} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              <ActiveCampaignsBoxEmpty />
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default ActiveCampaignsView;
