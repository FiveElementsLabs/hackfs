import { Address, BigInt, dataSource, ethereum } from "@graphprotocol/graph-ts";
import { ERC721 } from "../generated/CryptoUnicorns/ERC721";
import { Collection, Owner, Holding, Token } from "../generated/schema";

export function getOwnerOrCreate(address: Address): Owner {
  let owner = Owner.load(address.toHexString());
  if (!owner) {
    owner = new Owner(address.toHexString());
    owner.save();
  }
  return owner;
}

export function getTokenOrCreate(tokenId: BigInt, owner: Address): Token {
  let token = Token.load(dataSource.address().toHexString() + "-" + tokenId.toString());
  if (!token) {
    token = new Token(dataSource.address().toHexString() + "-" + tokenId.toString());
    token.owner = getOwnerOrCreate(owner).id;
    token.collection = getCollectionOrCreate().id;
    token.save();
  }
  return token;
}

export function getHoldingOrCreate(
  owner: Address,
  tokenId: BigInt,
  block: ethereum.Block
): Holding {
  let holding = Holding.load(owner.toHexString() + "-" + tokenId.toString());
  if (!holding) {
    holding = new Holding(owner.toHexString() + "-" + tokenId.toString());
    holding.token = dataSource.address().toHexString() + "-" + tokenId.toString();
    holding.owner = owner.toHexString();
    holding.from = block.timestamp;
    holding.save();
  }
  return holding;
}

export function getCollectionOrCreate(): Collection {
  let collection = Collection.load(dataSource.address().toHexString());
  if (!collection) {
    collection = new Collection(dataSource.address().toHexString());
    const collectionContract = ERC721.bind(dataSource.address());
    collection.name = collectionContract.name();
    collection.save();
  }
  return collection;
}
