import { Address, BigInt, dataSource, ethereum } from "@graphprotocol/graph-ts";
import { ERC721 } from "../generated/CryptoUnicorns/ERC721";
import { Owner, Pair, Token } from "../generated/schema";

export function getOwnerOrCreate(address: Address): Owner {
  let owner = Owner.load(address.toHexString());
  if (!owner) {
    owner = new Owner(address.toHexString());
    owner.save();
  }
  return owner;
}

export function getTokenOrCreate(tokenId: BigInt, owner: Address): Token {
  let token = Token.load(tokenId.toString());
  if (!token) {
    token = new Token(tokenId.toString());
    token.owner = getOwnerOrCreate(owner).id;
    token.save();
  }
  return token;
}

export function getPairOrCreate(owner: Address, tokenId: BigInt, block: ethereum.Block): Pair {
  let pair = Pair.load(owner.toHexString() + "-" + tokenId.toString());
  if (!pair) {
    pair = new Pair(owner.toHexString() + "-" + tokenId.toString());
    pair.tokenId = tokenId.toString();
    pair.owner = owner.toHexString();
    pair.from = block.timestamp;
    pair.save();
  }
  return pair;
}
