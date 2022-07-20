// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

contract WhitelistModule {
  function isWhitelisted(address _address, address[] memory whitelist) public pure returns (bool) {
    for (uint256 i = 0; i < whitelist.length; i++) {
      if (whitelist[i] == _address) {
        return true;
      }
    }
    return false;
  }
}
