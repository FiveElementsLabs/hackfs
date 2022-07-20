// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "../CampaignStorage.sol";
import "../../interfaces/IWhitelistModule.sol";

contract Whitelist is IWhitelistModule {
  address[] whitelist;

  constructor(address[] memory _whitelist) {
    whitelist = _whitelist;
  }

  function getWhitelist() public view returns (address[] memory) {
    return whitelist;
  }

  function addToWhitelist(address _address) public {
    require(_address != address(0), "WhitelistModule::addToWhitelist:Address already in whitelist");
    require(
      msg.sender == CampaignStorage.getStorage().owner,
      "WhitelistModule::addToWhitelist:Only owner can add to whitelist"
    );
    whitelist.push(_address);
  }

  function isWhitelisted(address _address) public view returns (bool) {
    for (uint256 i = 0; i < whitelist.length; i++) {
      if (whitelist[i] == _address) {
        return true;
      }
    }
    return false;
  }
}
