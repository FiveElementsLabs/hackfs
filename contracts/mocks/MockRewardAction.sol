// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "../CampaignStorage.sol";

contract MockRewardAction {
  function claim() public {
    StorageStruct storage Storage = CampaignStorage.getStorage();
    require(
      Storage.amountPerUser <= Storage.rewardToken.balanceOf(address(this)),
      "RewardAction::claim:Not enough token to claim"
    );
    Storage.rewardToken.transfer(msg.sender, Storage.amountPerUser);
  }
}
