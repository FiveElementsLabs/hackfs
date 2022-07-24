import React, { useMemo } from "react";
import type { NextPage } from "next";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import TokenImage from "../../components/TokenImage";
import LinkImg from "../../assets/svg/Link";
import LinkImg2 from "../../assets/svg/Link2";
import Coin from "../../assets/svg/Coin";
import Nft from "../../assets/svg/Nft";
import TwitterIcon from "../../assets/svg/Twitter";
import LensIcon from "../../assets/svg/Lens";
import CaretDown from "../../assets/svg/CaretDown";
import { ArrowRightIcon, BadgeCheckIcon } from "@heroicons/react/outline";

export const FakeCampaignData = {
  id: 1,
  title: "Giveaway #1",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus ac lorem tincidunt bibendum. Aliquam blandit ullamcorper luctus. Cras vulputate neque tincidunt lorem euismod pulvinar. Mauris malesuada vehicula nisl. Vestibulum faucibus tortor sit amet dictum rhoncus. Sed egestas eu urna vitae blandit.",
  img: "url",
  url: "url",
  status: "active",
  endDate: "2h:10m",
  participants: 4,
  winners: "0/100",
  rewards: {
    tokens: [
      {
        symbol: "USDC",
        amount: "10",
        address: "0x0",
      },
      {
        symbol: "DAI",
        amount: "10",
        address: "0x1",
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
      name: "twitter",
      subtasks: [
        "follow @aave on Twitter",
        "follow @synthetix on Twitter",
        "follow @cloudflare on Twitter",
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
      desc: "Must own at least 2 Eth in your wallet",
      type: "erc20",
    },
    {
      desc: "Must have owned a Cryptopunk for at least a week in the past",
      type: "nft",
    },
    {
      desc: "Must have a Twitter account older than 3 months",
      type: "extra",
    },
  ],
};

const Campaign: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  const campaign = useMemo(() => FakeCampaignData, []);

  return (
    <div className="w-full mt-8 pb-12 bg-dark-card rounded-xl">
      {campaign && (
        <div className="max-w-2xl mx-auto pt-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-medium">{campaign.title}</h1>
            <div className="scale-75">
              <a href={campaign.url}>
                <LinkImg />
              </a>
            </div>
          </div>

          <p className="text-md mt-6">{campaign.desc}</p>

          <div className="relative w-full h-72 mt-8">
            <Image
              src="/FallbackImage.png"
              alt="fallback campaign image"
              layout="fill"
              priority
            />
          </div>

          <div className="flex items-center justify-between mt-6 w-full">
            <div className="flex flex-col">
              <h3 className="text-md text-gray-400">Status</h3>
              <p
                className={`text-md uppercase font-medium ${
                  campaign.status === "active"
                    ? "text-bright-green"
                    : "text-bright-red"
                }`}
              >
                {campaign.status}
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-md text-gray-400">Ends in</h3>
              <p className="text-md uppercase font-medium text-bright-blue">
                {campaign.endDate.toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-md text-gray-400">Participants</h3>
              <p className="text-md uppercase font-medium">
                {campaign.participants}
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-md text-gray-400">Winner(s)</h3>
              <p className="text-md uppercase font-medium">
                {campaign.winners}
              </p>
            </div>
          </div>

          <div className="mt-8 w-full">
            <h1 className="text-3xl font-medium">Prize</h1>
            <div className="mt-5 flex items-center">
              <Coin color="white" className="scale-90" />
              <h3 className="text-lg ml-2">Tokens</h3>
            </div>

            <div className="mt-3 w-full rounded-xl border border-principal-gray flex flex-col gap-3 p-3">
              {campaign.rewards.tokens.map((token, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <TokenImage token={token.symbol} offsetSize="40px" />
                  <p>
                    <span className="font-medium mr-2">{token.amount}</span>
                    {token.symbol}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center">
              <Nft color="white" className="scale-90" />
              <h3 className="text-lg ml-2">NFT</h3>
            </div>
            <div className="mt-3 w-full rounded-xl border border-principal-gray flex flex-col gap-3 p-3">
              {campaign.rewards.nfts.map((nft, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <LinkImg2 className="scale-90" />
                  <a href={nft.link}>
                    <p className="border-b border-bright-blue text-bright-blue">
                      <span className="font-medium mr-2">{nft.amount}</span>
                      {nft.name}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 w-full">
            <h1 className="text-3xl font-medium">Tasks to complete</h1>

            <div className="flex flex-col gap-3 mt-3">
              {campaign.tasks.map((task, idx) => (
                <Disclosure
                  as="div"
                  key={idx}
                  className="border border-principal-gray gap-3 p-3 rounded-xl"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        as="div"
                        className="flex justify-between items-center w-full cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          {task.name === "twitter" ? (
                            <TwitterIcon className="scale-125 ml-3" />
                          ) : null}
                          {task.name === "lens" ? (
                            <LensIcon color="white" className="ml-2" />
                          ) : null}

                          <h2 className="text-lg capitalize">{task.name}</h2>
                        </div>

                        <CaretDown
                          color="white"
                          className={`mr-3 ${
                            open ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel as="div" className="mt-2 ml-6">
                        {task.subtasks.map((subtask, idx) => (
                          <p key={idx} className="py-1 text-bright-blue">
                            {subtask}
                          </p>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <h1 className="text-3xl font-medium">Eligibility requirements</h1>
            {campaign?.criteria?.map((criterion, idx) => (
              <div
                key={idx}
                className="w-full py-2 px-3 bg-gray-600 rounded-md flex items-center gap-2"
              >
                <BadgeCheckIcon width={24} />
                {criterion.desc}
              </div>
            ))}
          </div>

          <div className="mt-8 w-full flex justify-end">
            <Link href={`/campaign/registration/${cid}`}>
              <button
                className="w-60 py-2 rounded-lg bg-bright-blue hover:opacity-90 hover:shadow-sm 
              flex items-center justify-center gap-2"
              >
                <p className="text-lg tracking-wide">Join now</p>
                <ArrowRightIcon width={24} />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaign;
