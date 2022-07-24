import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import { CampaignFactory } from "../typechain-types";
import { getSelectors, tokensFixture } from "./shared/fixtures";

describe("Campaign Factory", () => {
  let gov: any = ethers.getSigners().then(async (signers) => {
    return signers[0];
  });
  let deployer: any = ethers.getSigners().then(async (signers) => {
    return signers[1];
  });
  let user: any = ethers.getSigners().then(async (signers) => {
    return signers[2];
  });
  let campaignFactory: CampaignFactory;
  let mockAction: Contract;
  let mockModule: Contract;

  before(async function () {
    gov = await gov;
    deployer = await deployer;
    user = await user;
    const diamondCutFactory = await ethers.getContractFactory("DiamondCutFacet");
    const diamondCut = await diamondCutFactory.deploy();
    await diamondCut.deployed();

    const campaignFactoryFactory = await ethers.getContractFactory("CampaignFactory");
    campaignFactory = (await campaignFactoryFactory.deploy(
      diamondCut.address,
      gov.address
    )) as CampaignFactory;
    await campaignFactory.deployed();
  });

  it("Should let governance add modules", async () => {
    const mockActionFactory = await ethers.getContractFactory("MockRewardAction");
    mockAction = await mockActionFactory.deploy();
    await mockAction.deployed();

    await campaignFactory.connect(gov).addModule({
      facetAddress: mockAction.address,
      action: 0,
      functionSelectors: await getSelectors(mockAction),
    });

    const mockModuleFactory = await ethers.getContractFactory("MockElegibilityModule");
    mockModule = await mockModuleFactory.deploy();
    await mockModule.deployed();

    await campaignFactory.connect(gov).addModule({
      facetAddress: mockModule.address,
      action: 0,
      functionSelectors: await getSelectors(mockModule),
    });
  });

  it("Should let a user deploy a campaign", async () => {
    const tokenEth = (await tokensFixture("ETH")).tokenFixture;
    await tokenEth.mint(deployer.address, ethers.utils.parseEther("1000000000000"));

    const rewardAmount = 1e7;
    const winners = 1;
    const amountPerUser = 1e4;
    const campaignStartTime = Date.now();
    const campaignEndTime = campaignStartTime + 1000 * 60 * 60 * 24 * 7;
    const checkElegibilityModule = mockModule.address;
    const rewardModule = mockAction.address;
    await tokenEth.connect(deployer).approve(campaignFactory.address, rewardAmount);
    const tx = await campaignFactory.connect(deployer).createCampaign(
      tokenEth.address,
      winners,
      rewardAmount,
      amountPerUser,
      campaignStartTime,
      campaignEndTime,

      [rewardModule, checkElegibilityModule]
    );
    const wait = await tx.wait();
    const campaignAddress = wait.events![wait.events!.length - 1].args!.campaign;
    const campaignClaimFallback = await ethers.getContractAt("MockRewardAction", campaignAddress);

    //check campaign is set up correctly

    const ethBalance = await tokenEth.balanceOf(user.address);
    await campaignClaimFallback.connect(user).claim();
    expect(await tokenEth.balanceOf(user.address)).to.eql(
      ethBalance.add(BigNumber.from(amountPerUser))
    );
  });
});
