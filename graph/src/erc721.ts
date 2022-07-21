import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/CryptoUnicorns/ERC721";
import { getOwnerOrCreate, getHoldingOrCreate, getTokenOrCreate } from "./getters";

const ZERO_ADDRESS = Address.fromHexString("0x0000000000000000000000000000000000000000");

export function handleTransfer(event: Transfer): void {
  const token = getTokenOrCreate(event.params.tokenId, event.params.to);
  const newOwner = getOwnerOrCreate(event.params.to);
  token.owner = event.params.to.toHexString();
  token.save();
  if (event.params.from != ZERO_ADDRESS) {
    const oldOwner = getOwnerOrCreate(event.params.from);
    const oldHolding = getHoldingOrCreate(event.params.from, event.params.tokenId, event.block);
    oldHolding.to = event.block.timestamp;
    oldHolding.timeHolded = event.block.timestamp.minus(oldHolding.from);
    // oldOwner.avgHoldingTime = calcAvgHoldingTime(event.params.from, event.block);
    // oldOwner.save();
    oldHolding.save();
  }
  if (event.params.to != ZERO_ADDRESS) {
    const newHolding = getHoldingOrCreate(event.params.to, event.params.tokenId, event.block);
    // newOwner.avgHoldingTime = calcAvgHoldingTime(event.params.to, event.block);
    // if (newOwner.holdings) {
    //   newOwner.holdings = newOwner.holdings!.concat([newHolding.id]);
    // } else {
    //   newOwner.holdings = [newHolding.id];
    // }
    // newOwner.save();
  }
}
