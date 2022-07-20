// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./Campaign.sol";

contract CampaignFactory {
  address governance;
  address diamondCutFacet;
  IDiamondCut.FacetCut[] public elegibilityModules;
  IDiamondCut.FacetCut[] public rewardModules;

  event CampaignCreated(address campaign);

  modifier onlyGovernance() {
    require(
      msg.sender == governance,
      "CampaignFactory::onlyGovernance:Only governance can call this function"
    );
    _;
  }

  constructor(address _diamondCutFacet) {
    governance = msg.sender;
    diamondCutFacet = _diamondCutFacet;
  }

  function addModule(IDiamondCut.FacetCut calldata _module, bool isRewardModule)
    external
    onlyGovernance
  {
    if (isRewardModule) {
      rewardModules.push(_module);
    } else {
      elegibilityModules.push(_module);
    }
  }

  function createCampaign(
    address _rewardToken,
    uint256 _winners,
    uint256 _rewardAmount,
    uint256 _amountPerUser,
    uint256 _campaignStartTime,
    uint256 _campaignEndTime,
    address _checkElegibilityModule,
    address _rewardModule
  ) public payable {
    Campaign campaign = new Campaign(
      msg.sender,
      diamondCutFacet,
      _rewardToken,
      _winners,
      _amountPerUser,
      _campaignStartTime,
      _campaignEndTime
    );
    IERC20(_rewardToken).transferFrom(msg.sender, address(campaign), _rewardAmount);
    IDiamondCut.FacetCut[] memory cut = new IDiamondCut.FacetCut[](2);
    for (uint256 i; i < elegibilityModules.length; ++i) {
      if (elegibilityModules[i].facetAddress == _checkElegibilityModule) {
        cut[0] = elegibilityModules[i];
        break;
      }
      require(
        i != elegibilityModules.length - 1,
        "CampaignFactory::createCampaign:ElegibilityModule not found"
      );
    }

    for (uint256 i; i < rewardModules.length; ++i) {
      if (rewardModules[i].facetAddress == _rewardModule) {
        cut[1] = rewardModules[i];
        break;
      }
      require(
        i != rewardModules.length - 1,
        "CampaignFactory::createCampaign:RewardModule not found"
      );
    }

    IDiamondCut(address(campaign)).diamondCut(cut, address(0), "");

    emit CampaignCreated(address(campaign));
  }
}
