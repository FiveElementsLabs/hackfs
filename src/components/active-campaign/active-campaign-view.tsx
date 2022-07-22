import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import ActiveCampaignsBox from "./active-campaign-box";
import { CampaignsBoxEmpty, Campaign } from "./active-campaign-box";
import { getDeadline } from "../../utils/utils";
import { CreateGiveawayBox } from "./create-giveaway-box";

const fakeMyCampaigns: Campaign[] = [
  {
    title: "Token Giveaway #2",
    imageURL:
      "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvNTg3NTgxZjItNjE3Yi00MDRiLWIzNTgtOGI0NjM2ZDQzOTRiLmpwZw==.jpg",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 5)),
    participants: 12,
    drawMethod: 0,
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: 189,
    drawMethod: 0,
  },
];

const fakeCampaigns: Campaign[] = [
  {
    title: "Token Giveaway",
    imageURL:
      "https://img.freepik.com/free-photo/medical-pill-with-bitcoin-sign-pink-background-bitcoin-technology-concept-medicine_535844-1506.jpg?w=2000",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: 21,
    drawMethod: 0,
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 6)),
    participants: 189,
    drawMethod: 0,
  },
  {
    title: "Token Giveaway #2",
    imageURL:
      "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvNTg3NTgxZjItNjE3Yi00MDRiLWIzNTgtOGI0NjM2ZDQzOTRiLmpwZw==.jpg",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 5)),
    participants: 12,
    drawMethod: 0,
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: 189,
    drawMethod: 0,
  },
];

const ActiveCampaignsView = ({ firstTab, secondTab }: { firstTab: String; secondTab: string }) => {
  const [switchCampaign, setSwitchCampaign] = useState(true);
  const { pathname } = useRouter();

  const campaigns = useMemo(
    () => (pathname === "/active-campaigns" ? fakeCampaigns : fakeMyCampaigns),
    [pathname]
  );

  return (
    <div className="grid max-w-4-xl mx-auto">
      <div className="w-auto mx-auto relative py-8">
        <div className="flex">
          <button
            className={`rounded-[0.45rem] azeret font-medium text-xs uppercase focus:outline-none py-1.5 ${
              switchCampaign
                ? "px-6 bg-shade-3 text-white z-10 -mr-3 border-2 border-secondary"
                : "pl-6 pr-6 border-none bg-shade-3 z-0 text-white opacity-80 py-[1px] hover:bg-shade-3 hover:opacity-90"
            }`}
            onClick={() => setSwitchCampaign(true)}
          >
            {firstTab}
          </button>
          <button
            className={`px-4 rounded-[0.45rem] azeret font-medium text-xs uppercase focus:outline-none py-1.5 ${
              !switchCampaign
                ? "px-6 bg-shade-3 text-white z-10 -ml-3 border-2 border-secondary"
                : "pl-6 pr-6 border-none bg-shade-3 z-0 text-white opacity-80 py-[1px] hover:bg-shade-3 hover:opacity-90"
            }`}
            onClick={() => setSwitchCampaign(false)}
          >
            {secondTab}
          </button>
        </div>
      </div>
      {switchCampaign ? (
        <>
          {pathname === "/active-campaigns" ? (
            <>
              {campaigns.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  {campaigns.map((campaign, id) => (
                    <ActiveCampaignsBox key={id} campaign={campaign} owned={false} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  <CampaignsBoxEmpty text={"Active campaigns will be shown here."} />
                </div>
              )}
            </>
          ) : (
            <>
              {campaigns.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  <CreateGiveawayBox />
                  {campaigns.map((campaign, id) => (
                    <ActiveCampaignsBox key={id} campaign={campaign} owned={true} />
                  ))}
                </div>
              ) : (
                <CreateGiveawayBox />
              )}
            </>
          )}
        </>
      ) : (
        <>
          {pathname === "/active-campaigns" ? (
            <div className="grid grid-cols-1 gap-4">
              <CampaignsBoxEmpty text={"The campaigns you participate to will appear here."} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              <CampaignsBoxEmpty text={"Your draft campaigns will appear here."} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActiveCampaignsView;
