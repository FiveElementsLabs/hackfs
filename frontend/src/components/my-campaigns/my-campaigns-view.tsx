import ActiveCampaignsView from "../active-campaign/active-campaign-view";

const MyCampaignsView = () => {
  return (
    <>
      <ActiveCampaignsView firstTab="created" secondTab="drafts" />
    </>
  );
};

export default MyCampaignsView;
