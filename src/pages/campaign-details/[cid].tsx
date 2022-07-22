import React, { useMemo } from "react";
import type { NextPage } from "next";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import TokenImage from "../../components/TokenImage";
import LinkImg from "../../assets/svg/Link";
import LinkImg2 from "../../assets/svg/Link2";
import Coin from "../../assets/svg/Coin";
import Nft from "../../assets/svg/Nft";
import TwitterIcon from "../../assets/svg/Twitter";
import LensIcon from "../../assets/svg/Lens";
import CaretDown from "../../assets/svg/CaretDown";
import { shortenAddress } from "../../lib/helpers";
import Copy from "../../assets/svg/Copy";
import Token from "../../assets/svg/Token";
import Hexagon from "../../assets/svg/Hexagon";
import Twitter from "../../assets/svg/Twitter";
import Lens from "../../assets/svg/Lens";
import ParticipantsTable from "./ParticipantsTable";

const FakeCampaignData = {
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
      image: <Twitter />,
      subtasks: [
        <p>
          Follow <a className="text-bright-blue hover:underline hover:cursor-pointer">@aave</a>
        </p>,
        <p>
          Follow <a className="text-bright-blue hover:underline hover:cursor-pointer">@synthetix</a>
        </p>,
        <p>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">@cloudflare</a>
        </p>,
        <p>
          Like and retweet{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">this post</a>
        </p>,
      ],
    },
    {
      name: "Lens",
      image: <Lens />,
      subtasks: [
        <p>
          Follow <a className="text-bright-blue hover:underline hover:cursor-pointer">@aave.lens</a>
        </p>,
        <p>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">@synthetix.lens</a>
        </p>,
        <p>
          Follow{" "}
          <a className="text-bright-blue hover:underline hover:cursor-pointer">@cloudflare.lens</a>
        </p>,
      ],
    },
  ],
};

const Campaign: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  const campaign = useMemo(() => FakeCampaignData, []);

  return (
    <div className="w-full mt-8 pb-12">
      {campaign && (
        <>
          <div className="max-w-4xl mx-auto pt-8 grid grid-cols-12 gap-2">
            <div className="col-span-4 bg-dark-card rounded-xl p-3">
              <div className="relative w-full h-36">
                <Image
                  src="/FallbackImage.png"
                  alt="fallback campaign image"
                  layout="fill"
                  priority
                />
              </div>
              <h1 className="text-xl font-medium my-2">{campaign.title}</h1>
              <hr />

              <div className="flex items-center justify-between mt-6 w-full">
                <div className="flex flex-col">
                  <h3 className="text-sm text-principal-gray">Status</h3>
                  <p
                    className={`text-sm uppercase font-medium ${
                      campaign.status === "active" ? "text-bright-green" : "text-bright-red"
                    }`}
                  >
                    {campaign.status}
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm text-principal-gray">Started</h3>
                  <p className="text-sm uppercase font-medium text-white">
                    {campaign.startDate.toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm text-principal-gray">Ends in</h3>
                  <p className="text-sm uppercase font-medium text-bright-blue">
                    {campaign.endDate.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex flex-row mt-3">
                <h3 className="text-sm text-principal-gray mr-2">
                  Participants: <span className="text-shade-2">{campaign.participants}</span>
                </h3>
                <h3 className="text-sm text-principal-gray">
                  Winner(s): <span className="text-shade-2">{campaign.winners}</span>
                </h3>
              </div>
            </div>

            <div className="col-span-5 bg-dark-card rounded-xl p-3">
              <h1 className="text-xl font-medium">Info</h1>

              <div className="flex items-center justify-between my-2 w-full">
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-sm text-principal-gray">
                    Campaign url:{" "}
                    <a href={campaign.url} className="text-bright-blue hover:underline">
                      {campaign.url}
                    </a>
                  </h3>
                  <h3 className="text-sm text-principal-gray">
                    Contract address:{" "}
                    <a
                      href={`https://etherscan.io/address/${campaign.address}`}
                      target="_blank"
                      className="text-bright-blue hover:underline"
                    >
                      {shortenAddress(campaign.address)}
                    </a>
                    <span
                      className="hover:cursor-pointer inline-block ml-2"
                      onClick={() => {
                        navigator.clipboard.writeText(campaign.address);
                      }}
                    >
                      <Copy />
                    </span>
                  </h3>
                  <h3 className="text-sm text-principal-gray">
                    Draw method:{" "}
                    <span className="text-white">{campaign.drawMethod ? "Everyone wins" : ""}</span>
                  </h3>
                </div>
              </div>
              <hr></hr>
              <h1 className="text-xl font-medium mt-1">Prize</h1>

              <div className="flex items-center justify-between mt-2 w-full mb-3">
                <div className="flex flex-col gap-y-2">
                  <div className="text-sm text-principal-gray">
                    <Token className="inline-block mr-2" />
                    Token (to be divided between the winners)
                  </div>
                  <div className="flex flex-row">
                    {campaign.rewards.tokens.map((elem, index) => {
                      return (
                        <>
                          <img
                            width={18}
                            key={index}
                            src={`https://app.aave.com/icons/tokens/${elem.symbol.toLowerCase()}.svg`}
                          />
                          <span className="ml-1">{elem.amount}</span>
                          <span className="uppercase mr-3">{elem.symbol}</span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2 mt-3 w-full">
                <div className="flex flex-col gap-y-2">
                  <div className="text-sm text-principal-gray">
                    <Hexagon className="inline-block mr-2" />
                    NFT
                  </div>
                  <div className="flex flex-row">
                    {campaign.rewards.nfts.map((elem, index) => {
                      return (
                        <>
                          <a key={index} href={elem.link}>
                            <span className="text-bright-blue hover:underline text-sm">
                              {elem.name}
                            </span>
                          </a>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-dark-card rounded-xl p-3">
              <h1 className="text-xl font-medium mb-1">Tasks</h1>

              <div className="w-full">
                {campaign.tasks.map((task, index) => {
                  return (
                    <div className="mt-2" key={index}>
                      <div className="mb-3 mt-3 gap-4">
                        {task.name === "Twitter" ? (
                          <Twitter className="inline-block mr-1" />
                        ) : (
                          <Lens className="inline-block mr-2" />
                        )}
                        {task.name}
                      </div>

                      {task.subtasks.map((subtask, index) => {
                        return <p className="mt-1 text-sm text-principal-gray">{subtask}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-5 bg-dark-card rounded-xl p-3">
            <ParticipantsTable />
          </div>
        </>
      )}
    </div>
  );
};

export default Campaign;
