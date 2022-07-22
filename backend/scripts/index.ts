import { Contract } from "ethers";
import { ethers } from "hardhat";
import { getSelectors, tokensFixture } from "../test/shared/fixtures";

const DeployFactory = async () => {
  const users = await ethers.getSigners();
  console.log("user: ", users[0]);

  //deploy Diamond Cut First

  const DiamondCutFactory = await ethers.getContractFactory("DiamondCutFacet");
  const DiamondCut = await DiamondCutFactory.deploy();

  const CampaignFactoryFactory = await ethers.getContractFactory("CampaignFactory");
  const CampaignFactory = await CampaignFactoryFactory.deploy(DiamondCut.address, users[0].address);
  console.log("CampaignFactory: ", CampaignFactory.address);
  return CampaignFactory;
};

const DeployCampaign = async (CampaignFactory: Contract) => {
  const users = await ethers.getSigners();

  const tokenEth = (await tokensFixture("ETH")).tokenFixture;
  await tokenEth.mint(users[0].address, ethers.utils.parseEther("1000000000000"));

  const SingleRewardActionFactory = await ethers.getContractFactory("SingleRewardAction");
  const SingleRewardAction = await SingleRewardActionFactory.deploy();
  const MockElegibilityModuleFactory = await ethers.getContractFactory("MockElegibilityModule");
  const MockElegibilityModule = await MockElegibilityModuleFactory.deploy();

  await CampaignFactory.addModule({
    facetAddress: SingleRewardAction.address,
    action: 0,
    functionSelectors: await getSelectors(SingleRewardAction),
  });

  await CampaignFactory.addModule({
    facetAddress: MockElegibilityModule.address,
    action: 0,
    functionSelectors: await getSelectors(MockElegibilityModule),
  });

  await tokenEth.approve(CampaignFactory.address, 100);

  const tx = await CampaignFactory.createCampaign(
    tokenEth.address, // erc20 reward token
    1, // winners
    100, // amount total reward
    1, // amount per user
    Math.floor((new Date() as any) / 1000), // start time in seconds
    Math.floor((new Date() as any) / 1000) + 3600, //end time in seconds
    [MockElegibilityModule.address, SingleRewardAction.address]
  );
  const wait = await tx.wait();
  const campaignAddress = wait.events![wait.events!.length - 1].args!.campaign;
  console.log("Campaign Address: ", campaignAddress);

  const Campaign = await ethers.getContractAt("Campaign", campaignAddress);
};

DeployFactory().then((CampaignFactory) => DeployCampaign(CampaignFactory));
