import { expect } from "chai";
import { ethers } from "hardhat";
import { CampaignFactory } from "../typechain-types";
import { getSelectors } from "./shared/fixtures";

describe("Campaign Factory", () => {
  let gov: any = ethers.getSigners().then(async (signers) => {
    return signers[0];
  });
  let user: any = ethers.getSigners().then(async (signers) => {
    return signers[1];
  });
  let campaignFactory: CampaignFactory;

  before(async function () {
    const diamondCutFactory = await ethers.getContractFactory("DiamondCut");
    const diamondCut = await diamondCutFactory.deploy();
    await diamondCut.deployed();

    const campaignFactoryFactory = await ethers.getContractFactory("CampaignFactory");
    campaignFactory = (await campaignFactoryFactory.deploy(diamondCut.address)) as CampaignFactory;
    await campaignFactory.deployed();
  });

  it("Should let governance add modules", async () => {
    const mockActionFactory = await ethers.getContractFactory("MockAction");
    const mockAction = await mockActionFactory.deploy();
    await mockAction.deployed();

    await campaignFactory.connect(gov).addModule(
      {
        facetAddress: mockAction.address,
        action: 1,
        functionSelectors: await getSelectors(mockAction),
      },
      true
    );
  });

  it("Should let a user deploy a campaign", async () => {
    const rewardToken = "0x123456789";
    const amountPerUser = 10;
    const campaignStartTime = Date.now();
    const campaignEndTime = campaignStartTime + 1000 * 60 * 60 * 24 * 7;
    const checkElegibilityModule = "0x123";
    const rewardModule = "0x456";
    const campaign = await campaignFactory
      .connect(user)
      .createCampaign(
        rewardToken,
        amountPerUser,
        campaignStartTime,
        campaignEndTime,
        checkElegibilityModule,
        rewardModule
      );

    //check campaign set up correctly
  });
});
