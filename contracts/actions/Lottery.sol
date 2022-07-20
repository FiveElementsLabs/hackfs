// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;

import "../../interfaces/IERC721Minter.sol";
import "../../interfaces/IWhitelistModule.sol";

import "../CampaignStorage.sol";

contract LotteryRewarder {
  //doesn't needed to be manipulated by miner cause the transaction
  function _getRandomNumber(uint256 param) internal view returns (uint256) {
    return
      uint256(
        keccak256(
          abi.encodePacked(
            param,
            block.timestamp,
            block.number,
            block.difficulty,
            msg.sender,
            address(this)
          )
        )
      );
  }

  function lottery(uint256 numToExtract) external view {
    StorageStruct storage Storage = CampaignStorage.getStorage();
    address[] memory eligibleUsers = IWhitelistModule(address(this)).whitelist();
    IERC721Minter rewardToken = IERC721Minter(Storage.rewardToken);
    for (uint256 i; i < numToExtract; i++) {
      uint256 randNumb = _getRandomNumber(eligibleUsers.length - i);

      //mint reward token to user
      rewardToken.mint(eligibleUsers[randNumb % (eligibleUsers.length - i)]);

      //remove the user from the list
      eligibleUsers[randNumb % (eligibleUsers.length - i)] = eligibleUsers[
        eligibleUsers.length - 1
      ];
    }
  }
}
