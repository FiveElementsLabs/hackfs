import React from "react";
import type { NextPage } from "next";

import ActiveCampaignView from "../components/active-campaign/active-campaign-view";

const ActiveCampaigns: NextPage = () => {
  return <ActiveCampaignView firstTab={"active"} secondTab={"participated"} />;
};

export default ActiveCampaigns;
