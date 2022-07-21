import React, { useMemo } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BadgeCheckIcon, PlusCircleIcon, RefreshIcon } from "@heroicons/react/outline";
import { useCeramic } from "../../../hooks/useCeramic";
import ConnectButton from "../../../components/ceramic/ConnectButton";
import { FakeCampaignData } from "../[cid]";
import NoSSR from "../../../components/NoSSR";

const CampaignRegistration: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;
  const { useBasicProfile, useSocialAccounts } = useCeramic();
  const campaign = useMemo(() => FakeCampaignData, []);

  const profile = useBasicProfile();
  const socials = useSocialAccounts();
  console.log(profile);
  console.log(socials);

  return (
    <div className="w-full mt-8 pb-12 bg-dark-card rounded-xl">
      {campaign && (
        <div className="max-w-2xl mx-auto pt-8">
          <h1 className="text-3xl font-medium">{campaign.title}</h1>
          <Link href={`/campaign/${cid}`}>
            <p className="text-lg mt-6 text-bright-blue cursor-pointer">
              Go back to the campaign page to see the full info
            </p>
          </Link>

          <div className="mt-6 border-2 border-principal-gray rounded-xl">
            <div className="p-4">
              <h2 className="text-lg font-medium">Connect your account to get started</h2>

              <div className="mt-3 flex items-center">
                <NoSSR>
                  <ConnectButton />
                </NoSSR>
              </div>
            </div>
          </div>

          <div className="mt-6 border-2 border-principal-gray rounded-xl">
            <div className="p-4">
              <h2 className="text-lg font-medium">
                Registration is{" "}
                <span
                  className={`${
                    campaign.status === "active" ? "text-bright-green" : "text-bright-red"
                  }`}
                >
                  {campaign.status === "active" ? "Open" : "Closed"}
                </span>
              </h2>
              <p className="mt-2">To join the campaign, you must complete these tasks:</p>

              <div className="mt-3 p-3 border-2 border-principal-gray rounded-md bg-blue-400 text-gray-700">
                <h3 className="text-xl text-center w-full text-white font-medium tracking-wide">
                  Twitter tasks
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {campaign?.tasks
                    ?.find((task) => task?.name === "twitter")
                    ?.subtasks?.map((subtask, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-lg bg-white py-3 px-3
                        shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 
                        focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <div className="flex items-center">
                          <Image src="/twitter_circle.png" alt="twitter" width={28} height={28} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{subtask}</p>
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-3 p-3 border-2 border-principal-gray rounded-md bg-green-700 text-gray-700">
                <h3 className="text-xl text-center w-full text-white font-medium tracking-wide">
                  Lens tasks
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {campaign?.tasks
                    ?.find((task) => task?.name === "lens")
                    ?.subtasks?.map((subtask, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-lg bg-white py-3 px-3
                        shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 
                        focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <div className="flex items-center">
                          <Image
                            src="/lens_square.jpeg"
                            className="rounded-full"
                            alt="lens"
                            width={28}
                            height={28}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{subtask}</p>
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <p className="mt-4">Additionally, you must satisfy these additional criteria:</p>
              <div className="mt-4 flex flex-col gap-3">
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

              <div className="mt-4 flex items-center gap-3">
                <button
                  className="flex items-center gap-2 py-2 px-4 bg-bright-blue hover:bg-opacity-90 
                hover:shadow-md rounded-md"
                >
                  <RefreshIcon width={24} />
                  Refresh data
                </button>
                <button
                  disabled
                  className="flex items-center gap-2 py-2 px-4 bg-bright-blue hover:bg-opacity-90 
                hover:shadow-md rounded-md disabled:bg-gray-700 disabled:text-gray-300"
                >
                  <PlusCircleIcon width={24} />
                  Join Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignRegistration;
