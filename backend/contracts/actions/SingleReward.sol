// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "../CampaignStorage.sol";
import "../../interfaces/IWhitelistModule.sol";

contract SingleRewardAction {
  function claim() public {
    StorageStruct storage Storage = CampaignStorage.getStorage();
    require(
      IWhitelistModule(address(this)).isWhitelisted(msg.sender),
      "RewardAction::claim:Not whitelisted"
    );

    IERC20 token = IERC20(Storage.rewardToken);
    require(
      Storage.amountPerUser <= token.balanceOf(address(this)),
      "RewardAction::claim:Not enough token to claim"
    );
    token.transfer(msg.sender, Storage.amountPerUser);
  }
}
