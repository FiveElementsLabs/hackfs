import { Contract } from "ethers";
import { ethers } from "hardhat";
import { getSelectors, tokensFixture } from "../test/shared/fixtures";
import { SingleRewardAction__factory } from "../typechain-types";

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

const DeployCampaign = async () => {
  ///factory = 0xE023f90F8AA0b36dc4593F6BaFe9D1b766b88459
  /// reward action = 0xc08B7720AD65a2b51e9c5F79EEd7c6b814A63066
  /// mock elegible = 0xbf47a1d8E5a90c7F1Ac0b9CbB100111B403ec9b0
  /// mock reward = 0x51091368Db47AEb4Ca953a3fEFBFF5F61FC78EC1
  const users = await ethers.getSigners();

  const tokenEth = await ethers.getContractAt(
    "MockToken",
    "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa"
  );

  const CampaignFactory = await ethers.getContractAt(
    "CampaignFactory",
    "0xE023f90F8AA0b36dc4593F6BaFe9D1b766b88459"
  );
  console.log(tokenEth.address);

  // const SingleRewardActionFactory = await ethers.getContractFactory("MockRewardAction");
  // const SingleRewardAction = await SingleRewardActionFactory.deploy();
  // const MockElegibilityModuleFactory = await ethers.getContractFactory("MockElegibilityModule");
  // const MockElegibilityModule = await MockElegibilityModuleFactory.deploy();
  // const SingleRewardAction = await ethers.getContractAt(
  //   "MockRewardAction",
  //   "0xc08B7720AD65a2b51e9c5F79EEd7c6b814A63066"
  // );
  // const MockElegibilityModule = await ethers.getContractAt(
  //   "MockElegibilityModule",
  //   "0xbf47a1d8E5a90c7F1Ac0b9CbB100111B403ec9b0"
  // );
  // await CampaignFactory.addModule({
  //   facetAddress: SingleRewardAction.address,
  //   action: 0,
  //   functionSelectors: await getSelectors(SingleRewardAction),
  // });

  // await CampaignFactory.addModule({
  //   facetAddress: MockElegibilityModule.address,
  //   action: 0,
  //   functionSelectors: await getSelectors(MockElegibilityModule),
  // });

  // const MockRewardActionFactory = await ethers.getContractFactory("MockRewardAction");
  // const MockRewardAction = await MockRewardActionFactory.deploy();

  // await CampaignFactory.addModule({
  //   facetAddress: MockRewardAction.address,
  //   action: 0,
  //   functionSelectors: await getSelectors(MockRewardAction),
  // });

  // const MockRewardAction = await ethers.getContractAt(
  //   "MockRewardAction",
  //   "0x51091368Db47AEb4Ca953a3fEFBFF5F61FC78EC1"
  // );

  //await tokenEth.approve(CampaignFactory.address, 1e15);
  console.log("after approve");

  const tx = await CampaignFactory.createCampaign(
    tokenEth.address, // erc20 reward token
    10, // winners
    1e6, // amount total reward
    1e5, // amount per user
    Math.floor((new Date() as any) / 1000), // start time in seconds
    Math.floor((new Date() as any) / 1000) + 3600, //end time in seconds
    ["0xbf47a1d8E5a90c7F1Ac0b9CbB100111B403ec9b0", "0x51091368Db47AEb4Ca953a3fEFBFF5F61FC78EC1"]
  );
  const wait = await tx.wait();
  const campaignAddress = wait.events![wait.events!.length - 1].args!.campaign;
  console.log("Campaign Address: ", campaignAddress);

  const Campaign = await ethers.getContractAt("Campaign", campaignAddress);

  return Campaign;
};

const Interaction = async (Campaign: Contract) => {
  const Claim = await ethers.getContractAt("MockRewardAction", Campaign.address);
  const tx = await Claim.claim();
  const wait = await tx.wait();
};

DeployCampaign();
