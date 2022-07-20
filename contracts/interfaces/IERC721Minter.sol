pragma solidity ^0.8.0;

interface IERC721Minter {
  function mint(address to) public override;
}
