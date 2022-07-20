// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import "../CampaignStorage.sol";

contract MockElegibilityModule {
  function isElegible() public pure returns (bool) {
    return true;
  }
}
