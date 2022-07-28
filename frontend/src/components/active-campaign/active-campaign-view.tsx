import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import ActiveCampaignsBox from "./active-campaign-box";
import { CampaignsBoxEmpty } from "./active-campaign-box";
import { CreateGiveawayBox } from "./create-giveaway-box";

import { fakeMyCampaigns, fakeCampaigns } from "../../../mockData";

const ActiveCampaignsView = ({
  firstTab,
  secondTab,
}: {
  firstTab: String;
  secondTab: string;
}) => {
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
                    <ActiveCampaignsBox
                      key={id}
                      campaign={campaign}
                      owned={false}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  <CampaignsBoxEmpty
                    text={"Active campaigns will be shown here."}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {campaigns.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                  <CreateGiveawayBox />
                  {campaigns.map((campaign, id) => (
                    <ActiveCampaignsBox
                      key={id}
                      campaign={campaign}
                      owned={true}
                    />
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
              <CampaignsBoxEmpty
                text={"The campaigns you participate to will appear here."}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              <CampaignsBoxEmpty
                text={"Your draft campaigns will appear here."}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActiveCampaignsView;
