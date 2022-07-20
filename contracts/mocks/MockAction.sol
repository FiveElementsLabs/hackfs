// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

contract MockAction {
  function claim() public pure {
    require(false, "Successfully reverted");
  }
}
