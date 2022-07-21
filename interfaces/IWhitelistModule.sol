// SPDX-License-Identifier: GPL-2.0
pragma solidity ^0.8.0;
pragma abicoder v2;

interface IWhitelistModule {
  function getWhitelist() external view returns (address[] memory);

  function isWhitelisted(address _address) external view returns (bool);
}
