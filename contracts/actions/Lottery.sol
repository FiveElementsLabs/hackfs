pragma solidity ^0.8.0;

import "../interfaces/IERC721Minter.sol";

contract LotteryRewarder {
  //array of address to be rewarded
  address[] toBeRewarder = [
    0x1234567890123456789012345678901234567890,
    0x2234567890123456789012345678901234567890,
    0x3234567890123456789012345678901234567890
  ];
  // address of 721 contract
  IERC721Minter NFTtokenToMint = IERC721Minter(0x4234567890123456789012345678901234567890);
  // address of the creatoir that need to trigger the lottery
  address creator = 0x5234567890123456789012345678901234567890;

  //doesn't needed to be manipulated by miner cause the transaction
  function getRandomNumber() internal view returns (uint256) {
    return
      uint256(
        keccak256(
          abi.encodePacked(
            toBeRewarder.length,
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
    assert(msg.sender == creator);
    for (uint256 i; i < numToExtract; i++) {
      uint256 randNumb = getRandomNumber();
      NFTtokenToMint.mint(toBeRewarder[randNumb % toBeRewarder.length]);
    }
  }
}
