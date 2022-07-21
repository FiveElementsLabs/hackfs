// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./IDiamondCut.sol";

interface ICampaignFactory {
  function keeper() external returns (address);

  function addModule(IDiamondCut.FacetCut calldata _module, bool isRewardModule) external;

  function createCampaign(
    address _rewardToken,
    uint256 _winners,
    uint256 _rewardAmount,
    uint256 _amountPerUser,
    uint256 _campaignStartTime,
    uint256 _campaignEndTime,
    address _checkElegibilityModule,
    address _rewardModule
  ) external payable;
}
