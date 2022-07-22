// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "../CampaignStorage.sol";
import "../../interfaces/ICampaignFactory.sol";

import "../../interfaces/IWhitelistModule.sol";

contract Whitelist is IWhitelistModule {
  address[] whitelist;

  constructor(address[] memory _whitelist) {
    whitelist = _whitelist;
  }

  function getWhitelist() public view override returns (address[] memory) {
    return whitelist;
  }

  function addToWhitelist(address[] memory _addresses) public {
    require(
      msg.sender == ICampaignFactory(CampaignStorage.getStorage().factory).keeper(),
      "WhitelistModule::addToWhitelist:Only owner can add to whitelist"
    );
    for (uint256 i; i < _addresses.length; i++) {
      require(
        _addresses[i] != address(0),
        "WhitelistModule::addToWhitelist:Address already in whitelist"
      );
      whitelist.push(_addresses[i]);
    }
  }

  function isWhitelisted(address _address) public view override returns (bool) {
    for (uint256 i = 0; i < whitelist.length; i++) {
      if (whitelist[i] == _address) {
        return true;
      }
    }
    return false;
  }
}
