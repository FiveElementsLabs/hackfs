// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "../CampaignStorage.sol";

contract MockRewardAction {
  function claim() public {
    StorageStruct storage Storage = CampaignStorage.getStorage();
    IERC20 token = IERC20(Storage.rewardToken);
    require(
      Storage.amountPerUser <= token.balanceOf(address(this)),
      "RewardAction::claim:Not enough token to claim"
    );
    token.transfer(msg.sender, Storage.amountPerUser);
  }
}
