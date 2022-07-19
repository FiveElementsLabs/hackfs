// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./CampaignStorage.sol";

contract Campaign {
  modifier onlyOwner() {
    require(msg.sender == CampaignStorage.getStorage().owner);
    _;
  }

  constructor(
    address _owner,
    address _diamondCutFacet,
    address _rewardToken
  ) payable {
    CampaignStorage.setContractOwner(_owner);

    // Add the diamondCut external function from the diamondCutFacet
    IDiamondCut.FacetCut[] memory cut = new IDiamondCut.FacetCut[](1);
    bytes4[] memory functionSelectors = new bytes4[](1);
    functionSelectors[0] = IDiamondCut.diamondCut.selector;
    cut[0] = IDiamondCut.FacetCut({
      facetAddress: _diamondCutFacet,
      action: IDiamondCut.FacetCutAction.Add,
      functionSelectors: functionSelectors
    });
    CampaignStorage.diamondCut(cut, address(0), "");
    StorageStruct storage Storage = CampaignStorage.getStorage();
    Storage.rewardToken = IERC20(_rewardToken);
  }
}
