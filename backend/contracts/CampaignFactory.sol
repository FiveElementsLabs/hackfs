// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./Campaign.sol";
import "../interfaces/ICampaignFactory.sol";

contract CampaignFactory is ICampaignFactory {
  address governance;
  address diamondCutFacet;
  address public override keeper;
  IDiamondCut.FacetCut[] public modules;

  event CampaignCreated(address campaign);

  modifier onlyGovernance() {
    require(
      msg.sender == governance,
      "CampaignFactory::onlyGovernance:Only governance can call this function"
    );
    _;
  }

  constructor(address _diamondCutFacet, address _keeper) {
    governance = msg.sender;
    diamondCutFacet = _diamondCutFacet;
    keeper = _keeper;
  }

  function addModule(IDiamondCut.FacetCut calldata _module) external override onlyGovernance {
    modules.push(_module);
  }

  function createCampaign(
    address _rewardToken,
    uint256 _winners,
    uint256 _rewardAmount,
    uint256 _amountPerUser,
    uint256 _campaignStartTime,
    uint256 _campaignEndTime,
    address[] calldata _modules
  ) external payable override {
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
    IDiamondCut.FacetCut[] memory cut = new IDiamondCut.FacetCut[](_modules.length);

    for (uint256 i; i < _modules.length; ++i) {
      for (uint256 y; y < modules.length; ++y) {
        if (modules[y].facetAddress == _modules[i]) {
          cut[i] = modules[y];
          continue;
        }
      }
    }

    IDiamondCut(address(campaign)).diamondCut(cut, address(0), "");

    emit CampaignCreated(address(campaign));
  }
}
