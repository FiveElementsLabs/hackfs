import { Transfer } from "../generated/CryptoUnicorns/ERC721";
import { getOwnerOrCreate, getPairOrCreate, getTokenOrCreate } from "./getters";

export function handleTransfer(event: Transfer): void {
  const oldOwner = getOwnerOrCreate(event.params.from);
  const newOwner = getOwnerOrCreate(event.params.to);
  const token = getTokenOrCreate(event.params.tokenId);
  const oldPair = getPairOrCreate(event.params.from, event.params.tokenId, event.block);
  const newPair = getPairOrCreate(event.params.to, event.params.tokenId, event.block);
  oldPair.to = event.block.timestamp;
  token.owner = event.params.to.toHexString();
}
