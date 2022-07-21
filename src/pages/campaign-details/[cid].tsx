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

const FakeCampaignData = {
  id: 1,
  title: "Giveaway #1",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus ac lorem tincidunt bibendum. Aliquam blandit ullamcorper luctus. Cras vulputate neque tincidunt lorem euismod pulvinar. Mauris malesuada vehicula nisl. Vestibulum faucibus tortor sit amet dictum rhoncus. Sed egestas eu urna vitae blandit.",
  img: "url",
  url: "url",
  status: "active",
  startDate: "7h:50m",
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
};

const Campaign: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  const campaign = useMemo(() => FakeCampaignData, []);

  return (
    <div className="w-full mt-8 pb-12">
      {campaign && (
        <div className="max-w-4xl mx-auto pt-8 grid grid-cols-12">
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
                <h3 className="text-sm text-gray-400">Status</h3>
                <p
                  className={`text-sm uppercase font-medium ${
                    campaign.status === "active" ? "text-bright-green" : "text-bright-red"
                  }`}
                >
                  {campaign.status}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Started</h3>
                <p className="text-sm uppercase font-medium text-white">
                  {campaign.startDate.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Ends in</h3>
                <p className="text-sm uppercase font-medium text-bright-blue">
                  {campaign.endDate.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 bg-dark-card rounded-xl p-3">
            <h1 className="text-xl font-medium my-2">Info</h1>
            <hr />

            <div className="flex items-center justify-between mt-6 w-full">
              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Status</h3>
                <p
                  className={`text-sm uppercase font-medium ${
                    campaign.status === "active" ? "text-bright-green" : "text-bright-red"
                  }`}
                >
                  {campaign.status}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Started</h3>
                <p className="text-sm uppercase font-medium text-white">
                  {campaign.startDate.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Ends in</h3>
                <p className="text-sm uppercase font-medium text-bright-blue">
                  {campaign.endDate.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-dark-card rounded-xl p-3">
            <h1 className="text-xl font-medium my-2">Prize</h1>
            <hr />

            <div className="flex items-center justify-between mt-6 w-full">
              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Status</h3>
                <p
                  className={`text-sm uppercase font-medium ${
                    campaign.status === "active" ? "text-bright-green" : "text-bright-red"
                  }`}
                >
                  {campaign.status}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Started</h3>
                <p className="text-sm uppercase font-medium text-white">
                  {campaign.startDate.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Ends in</h3>
                <p className="text-sm uppercase font-medium text-bright-blue">
                  {campaign.endDate.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-dark-card rounded-xl p-3">
            <h1 className="text-xl font-medium my-2">Tasks</h1>
            <hr />

            <div className="flex items-center justify-between mt-6 w-full">
              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Status</h3>
                <p
                  className={`text-sm uppercase font-medium ${
                    campaign.status === "active" ? "text-bright-green" : "text-bright-red"
                  }`}
                >
                  {campaign.status}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Started</h3>
                <p className="text-sm uppercase font-medium text-white">
                  {campaign.startDate.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm text-gray-400">Ends in</h3>
                <p className="text-sm uppercase font-medium text-bright-blue">
                  {campaign.endDate.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaign;
