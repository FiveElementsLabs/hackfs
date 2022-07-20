// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./Campaign.sol";

contract CampaignFactory {
  IDiamondCut.FacetCut[] public elegibilityModules;
  IDiamondCut.FacetCut[] public rewardModules;

  function createCampaign(
    address _owner,
    address _diamondCutFacet,
    address _rewardToken,
    uint256 _amountPerUser,
    uint256 _campaignStartTime,
    uint256 _campaignEndTime,
    address _checkElegibilityModule,
    address _rewardModule
  ) public payable {
    Campaign campaign = new Campaign(
      _owner,
      _diamondCutFacet,
      _rewardToken,
      _amountPerUser,
      _campaignStartTime,
      _campaignEndTime
    );

    IDiamondCut.FacetCut[] memory cut = new IDiamondCut.FacetCut[](2);
    for (uint256 i; i < elegibilityModules.length; ++i) {
      if (elegibilityModules[i].facetAddress == _checkElegibilityModule) {
        cut[0] = elegibilityModules[i];
        break;
      }
      require(i != elegibilityModules.length - 1, "ElegibilityModule not found");
    }

    for (uint256 i; i < rewardModules.length; ++i) {
      if (rewardModules[i].facetAddress == _rewardModule) {
        cut[1] = rewardModules[i];
        break;
      }
      require(i != rewardModules.length - 1, "RewardModule not found");
    }

    IDiamondCut(address(campaign)).diamondCut(cut, address(0), "");
  }
}
