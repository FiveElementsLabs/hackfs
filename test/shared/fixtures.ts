import { ethers } from "hardhat";
import { MockToken } from "../../typechain-types";

interface TokensFixture {
  tokenFixture: MockToken;
}

// get function selectors from ABI
export async function getSelectors(contract: any) {
  const signatures = Object.keys(contract.interface.functions);
  const selectors = signatures.reduce((acc: any, val: any) => {
    if (val !== "init(bytes)") {
      acc.push(contract.interface.getSighash(val));
    }
    return acc;
  }, []);
  selectors.contract = contract;

  return selectors;
}

export async function tokensFixture(name: string): Promise<TokensFixture> {
  const tokenFactory = await ethers.getContractFactory("MockToken");
  const tokenFixture: MockToken = (await tokenFactory.deploy(name, name)) as MockToken;
  return { tokenFixture };
}
