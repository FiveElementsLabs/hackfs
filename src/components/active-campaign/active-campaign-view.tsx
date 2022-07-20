import React, { useState } from "react";
import ActiveCampaignsBox from "./active-campaign-box";
import { ActiveCampaignsBoxEmpty } from "./active-campaign-box";

const campaigns = [];

const ActiveCampaignsView = () => {
  const [switchCampaign, setSwitchCampaign] = useState(true);

  return (
    <div className="grid place-content-center">
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
