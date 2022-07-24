import { Campaign } from "./src/components/active-campaign/active-campaign-box";
import { getDeadline } from "./src/utils/utils";
import TwitterFooter from "./src/assets/svg/Twitter";
import Lens from "./src/assets/svg/Lens";

export const fakeMyCampaigns: Campaign[] = [
  {
    title: "Token Giveaway #2",
    imageURL:
      "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvNTg3NTgxZjItNjE3Yi00MDRiLWIzNTgtOGI0NjM2ZDQzOTRiLmpwZw==.jpg",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 5)),
    participants: 12,
    drawMethod: 0,
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: 189,
    drawMethod: 0,
  },
];

export const fakeCampaigns: Campaign[] = [
  {
    title: "Token Giveaway",
    imageURL:
      "https://img.freepik.com/free-photo/medical-pill-with-bitcoin-sign-pink-background-bitcoin-technology-concept-medicine_535844-1506.jpg?w=2000",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: 21,
    drawMethod: 0,
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 6)),
    participants: 189,
    drawMethod: 0,
  },
  {
    title: "Token Giveaway #2",
    imageURL:
      "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvNTg3NTgxZjItNjE3Yi00MDRiLWIzNTgtOGI0NjM2ZDQzOTRiLmpwZw==.jpg",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 5)),
    participants: 12,
    drawMethod: 0,
  },
  {
    title: "5EL NFT Giveaway",
    imageURL:
      "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
    deadline: getDeadline(new Date().setDate(new Date().getDate() + 7)),
    participants: 189,
    drawMethod: 0,
  },
];

export const FakeCampaignData = {
  id: 1,
  address: "0x8d3b65FcFFceCcF80e27a9910D19301B1492821f",
  title: "Anime fans Twitter giveaway",
  desc: 'GM Anime fans! This campaign is targeted to everyone who has already interacted with Manga or Anime crypto projects before. We are giving away 10 whitelist spots for the "@GM_Anime 1st Edition" NFT mint, and 1 WETH in total as reward divided among the first 100 people who participate in this campaign.',
  img: "/NFTBanner.png",
  url: "https://randomnftcollection.com/",
  status: "active",
  endDate: "2h:10m",
  participants: 87,
  winners: "0/100",
  rewards: {
    tokens: [
      {
        symbol: "WETH",
        amount: "1",
        address: "0x0",
      },
      {
        symbol: "MATIC",
        amount: "100",
        address: "0x214",
      },
    ],
    nfts: [
      {
        name: "Anime POAP collection",
        address: "0x124097",
        amount: 12,
        link: "https://aave.com",
      },
    ],
  },
  tasks: [
    {
      name: "twitter",
      subtasks: [
        "follow @AnimeNFT on Twitter",
        "Like this post on Twitter",
        "follow @anime_gaming on Twitter",
        "Like and retweet this post",
      ],
    },
    {
      name: "lens",
      subtasks: [
        "follow @aave.lens on Lens",
        "follow @synthetix.lens on Lens",
        "follow @cloudflare.lens on Lens",
      ],
    },
  ],
  criteria: [
    {
      desc: "Must own at least 0.5 Eth in your wallet",
      type: "erc20",
    },
    {
      desc: "Must have owned an Anime-related NFT for at least a month in the past",
      type: "nft",
    },
    {
      desc: "Must have a Twitter account older than 6 months",
      type: "extra",
    },
  ],
};

export const FakeCampaignDataDetails = {
  id: 1,
  address: "0x8d3b65FcFFceCcF80e27a9910D19301B1492821f",
  title: "Giveaway #1",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus ac lorem tincidunt bibendum. Aliquam blandit ullamcorper luctus. Cras vulputate neque tincidunt lorem euismod pulvinar. Mauris malesuada vehicula nisl. Vestibulum faucibus tortor sit amet dictum rhoncus. Sed egestas eu urna vitae blandit.",
  img: "url",
  url: "http//tide.protocol/campaign/1",
  status: "active",
  startDate: "7h:50m",
  drawMethod: 1,
  endDate: "2h:10m",
  participants: 4,
  winners: "0/100",
  rewards: {
    tokens: [
      {
        symbol: "ETH",
        amount: "0.0024",
        address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      },
      {
        symbol: "USDC",
        amount: "20.00",
        address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      },
    ],
    nfts: [
      {
        name: "Beta testers collection",
        address: "0x124097",
        amount: 4,
        link: "https://aave.com",
      },
    ],
  },
  tasks: [
    {
      name: "Twitter",
      image: <TwitterFooter />,
      subtasks: [
        <p key={1}>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">
            @aave
          </a>
        </p>,
        <p key={2}>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">
            @synthetix
          </a>
        </p>,
        <p key={3}>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">
            @cloudflare
          </a>
        </p>,
        <p key={4}>
          Like and retweet{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">
            this post
          </a>
        </p>,
      ],
    },
    {
      name: "Lens",
      image: <Lens />,
      subtasks: [
        <p key={1}>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">
            @aave.lens
          </a>
        </p>,
        <p key={2}>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">
            @synthetix.lens
          </a>
        </p>,
        <p key={3}>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">
            @cloudflare.lens
          </a>
        </p>,
      ],
    },
  ],
};
