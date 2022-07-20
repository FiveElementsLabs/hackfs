// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./CampaignStorage.sol";

contract Campaign {
  modifier onlyOwner() {
    require(msg.sender == CampaignStorage.getStorage().owner);
    _;
  }

  modifier onlyActiveCampaign() {
    StorageStruct storage Storage = CampaignStorage.getStorage();
    require(
      Storage.campaignStartTime <= block.timestamp && block.timestamp <= Storage.campaignEndTime
    );
    _;
  }

  constructor(
    address _owner,
    address _diamondCutFacet,
    address _rewardToken,
    uint256 _amountPerUser,
    uint256 _campaignStartTime,
    uint256 _campaignEndTime
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
    Storage.factory = msg.sender;
    Storage.rewardToken = IERC20(_rewardToken);
    Storage.amountPerUser = _amountPerUser;
    Storage.campaignStartTime = _campaignStartTime;
    Storage.campaignEndTime = _campaignEndTime;
  }

  fallback() external payable onlyActiveCampaign {
    StorageStruct storage Storage = CampaignStorage.getStorage();

    address facet = Storage.selectorToFacetAndPosition[msg.sig].facetAddress;
    require(facet != address(0), "PositionManager::Fallback: Function does not exist");

    ///@dev Execute external function from facet using delegatecall and return any value.
    assembly {
      // copy function selector and any arguments
      calldatacopy(0, 0, calldatasize())
      // execute function call using the facet
      let result := delegatecall(gas(), facet, 0, calldatasize(), 0, 0)
      // get any return value
      returndatacopy(0, 0, returndatasize())
      // return any return value or error back to the caller
      switch result
      case 0 {
        revert(0, returndatasize())
      }
      default {
        return(0, returndatasize())
      }
    }
  }

  receive() external payable {
    revert();
  }
}
