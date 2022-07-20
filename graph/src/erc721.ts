import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/CryptoUnicorns/ERC721";
import { getOwnerOrCreate, getPairOrCreate, getTokenOrCreate } from "./getters";

const ZERO_ADDRESS = Address.fromHexString("0x0000000000000000000000000000000000000000");

export function handleTransfer(event: Transfer): void {
  const token = getTokenOrCreate(event.params.tokenId);
  const newOwner = getOwnerOrCreate(event.params.to);
  token.owner = event.params.to.toHexString();
  token.save();
  if (event.params.from != ZERO_ADDRESS) {
    const oldOwner = getOwnerOrCreate(event.params.from);
    const oldPair = getPairOrCreate(event.params.from, event.params.tokenId, event.block);
    oldPair.to = event.block.timestamp;
    oldPair.timeHolded = event.block.timestamp.minus(oldPair.from);
    oldPair.save();
  }
  if (event.params.from != ZERO_ADDRESS) {
    const newPair = getPairOrCreate(event.params.to, event.params.tokenId, event.block);
  }
}
