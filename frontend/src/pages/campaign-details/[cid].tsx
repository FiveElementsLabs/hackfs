import React, { useMemo } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { shortenAddress } from "../../lib/helpers";
import Copy from "../../assets/svg/Copy";
import Token from "../../assets/svg/Token";
import Hexagon from "../../assets/svg/Hexagon";
import Twitter from "../../assets/svg/Twitter";
import Lens from "../../assets/svg/Lens";
import ParticipantsTable from "./ParticipantsTable";

import { FakeCampaignDataDetails } from "../../../mockData";

const Campaign: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  const campaign = useMemo(() => FakeCampaignDataDetails, []);

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
                      campaign.status === "active"
                        ? "text-bright-green"
                        : "text-bright-red"
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
                  Participants:{" "}
                  <span className="text-shade-2">{campaign.participants}</span>
                </h3>
                <h3 className="text-sm text-principal-gray">
                  Winner(s):{" "}
                  <span className="text-shade-2">{campaign.winners}</span>
                </h3>
              </div>
            </div>

            <div className="col-span-5 bg-dark-card rounded-xl p-3">
              <h1 className="text-xl font-medium">Info</h1>

              <div className="flex items-center justify-between my-2 w-full">
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-sm text-principal-gray">
                    Campaign url:{" "}
                    <a
                      href={campaign.url}
                      className="text-bright-blue hover:underline"
                    >
                      {campaign.url}
                    </a>
                  </h3>
                  <h3 className="text-sm text-principal-gray">
                    Contract address:{" "}
                    <a
                      href={`https://etherscan.io/address/${campaign.address}`}
                      target="_blank"
                      className="text-bright-blue hover:underline"
                      rel="noopener noreferrer"
                    >
                      {shortenAddress(campaign.address)}
                    </a>
                    <span
                      className="hover:cursor-pointer inline-block ml-2"
                      onClick={() =>
                        navigator.clipboard.writeText(campaign.address)
                      }
                    >
                      <Copy />
                    </span>
                  </h3>
                  <h3 className="text-sm text-principal-gray">
                    Draw method:{" "}
                    <span className="text-white">
                      {campaign.drawMethod ? "Everyone wins" : ""}
                    </span>
                  </h3>
                </div>
              </div>
              <hr></hr>
              <h1 className="text-xl font-medium mt-1">Prize</h1>

              <div className="flex items-center justify-between mt-2 w-full mb-3">
                <div className="flex flex-col gap-y-2">
                  <div className="text-sm text-principal-gray">
                    <Token className="inline-block mr-2" />
                    Tokens (to be divided between the winners)
                  </div>
                  <div className="flex flex-row">
                    {campaign.rewards.tokens.map((elem, index) => (
                      <div key={index}>
                        <Image
                          width={18}
                          height={18}
                          alt="token"
                          key={index}
                          src={`https://app.aave.com/icons/tokens/${elem.symbol.toLowerCase()}.svg`}
                        />
                        <span className="ml-1 mr-1">{elem.amount} </span>
                        <span className="uppercase mr-3">{elem.symbol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2 mt-3 w-full">
                <div className="flex flex-col gap-y-2">
                  <div className="text-sm text-principal-gray">
                    <Hexagon className="inline-block mr-2" />
                    NFTs
                  </div>
                  <div className="flex flex-row">
                    {campaign.rewards.nfts.map((elem, index) => (
                      <a key={index} href={elem.link}>
                        <span className="text-bright-blue hover:underline text-sm">
                          {elem.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-dark-card rounded-xl p-3">
              <h1 className="text-xl font-medium mb-1">Tasks</h1>

              <div className="w-full">
                {campaign.tasks.map((task, index) => (
                  <div className="mt-2" key={index}>
                    <div className="mb-3 mt-3 gap-4">
                      {task.name === "Twitter" ? (
                        <Twitter className="inline-block mr-1" />
                      ) : (
                        <Lens className="inline-block mr-2" />
                      )}
                      {task.name}
                    </div>
                    {task.subtasks.map((subtask, index) => (
                      <div
                        key={index}
                        className="mt-1 text-sm text-principal-gray"
                      >
                        {subtask}
                      </div>
                    ))}
                  </div>
                ))}
                ;
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
