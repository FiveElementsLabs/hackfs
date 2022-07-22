import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition, Switch } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DateRangePicker } from "react-nice-dates";
import { enUS } from "date-fns/locale";
import "react-nice-dates/build/style.css";

import Target from "../../assets/svg/target";

import { uploadIpfs } from "../../lib/ipfs";

const twitter = [{ name: "Tweet interaction" }, { name: "Follow on Twitter" }];
const lens = [{ name: "Post interaction" }, { name: "Follow on Lens" }];
const tokens = [
  { name: "ETH", address: "0x123456890" },
  { name: "BTC", address: "0x0987654321" },
];
const targets = [
  "Select Filter",
  "Anime watcher",
  "Manga reader",
  "Book reader",
  "Game player",
];

const CreateCampaignView = () => {
  const targets = [
    "Select Filter",
    "Anime watcher",
    "Manga reader",
    "Book reader",
    "Game player",
  ];

  const [timings, setTimings] = useState("automatic");
  const [selectedTarget, setSelectedTarget] = useState(targets[0]);
  const [displayTarget, setDisplayTarget] = useState(false);
  const [displayTargetSelect, setDisplayTargetSelect] = useState(false);

  return (
    <div className=" bg-elements text-principal-lightgray py-8 rounded-xl">
      <div className="max-w-2xl mx-auto">
        <FormData />
      </div>
    </div>
  );
};

export default CreateCampaignView;

const RewardSectionToken = ({
  number,
  selectedToken,
  setSelectedToken,
  rewardToAll,
  setRewardToAll,
  register,
  errors,
}: {
  number: any;
  selectedToken: any;
  setSelectedToken: any;
  rewardToAll: any;
  setRewardToAll: any;
  register: any;
  errors: any;
}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex justify-between">
          <h1 className="mb-2">Reward #{number}</h1>

          <div className="flex">
            <h5 className="text-[12px] opacity-50 mr-2">
              Split between all participiants
            </h5>
            <Toggle enabled={rewardToAll} setEnabled={setRewardToAll} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mb-1">
          <div className="col-span-3 text-[12px] opacity-50">Select token:</div>
          <div className="col-span-6 text-[12px] opacity-50">Total amount:</div>
          <div className="col-span-3 text-[12px] opacity-50">Winner count:</div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2">
          <div className="col-span-3">
            <TokenList
              selected={selectedToken}
              setSelected={setSelectedToken}
            />
          </div>

          <div className="col-span-6">
            <input
              {...register("rewardToken")}
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300 text-black pl-3 w-full rounded-md py-2"
              placeholder="Amount"
            />
          </div>
          <div className="col-span-3">
            <input
              {...register("tokenWinners")}
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300 text-black pl-3 w-full rounded-md py-2"
              placeholder="Winner(s)"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="col-span-3 text-[12px] opacity-50 mb-1">
            Contract address:
          </div>

          <input
            {...register("tokenAddress")}
            className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300 text-black pl-3 w-full rounded-md py-2 "
            placeholder="URL"
          />
        </div>
      </div>
    </>
  );
};
const RewardSectionNFT = ({
  number,
  register,
  errors,
}: {
  number: any;
  register: any;
  errors: any;
}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex justify-between">
          <h1 className="mb-2">Reward #{number}</h1>
        </div>
        <div className="grid grid-cols-12 gap mb-1">
          <div className="col-span-9 text-[12px] opacity-50">
            NFT redirect link:
          </div>
          <div className="col-span-3 text-[12px] opacity-50">Winner count:</div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-9">
            <input
              {...register("nftRedirect")}
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300 text-black pl-3 w-full rounded-md py-2"
              placeholder="Nft redirect link"
            />
          </div>
          <div className="col-span-3">
            <input
              {...register("nftWinners")}
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300 text-black pl-3 w-full rounded-md py-2"
              placeholder="Winner(s)"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="col-span-3 text-[12px] opacity-50 mb-1">
            Contract address:
          </div>

          <input
            {...register("nftAddress")}
            className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300 text-black pl-3 w-full rounded-md py-2 "
            placeholder="URL"
          />
        </div>
      </div>
    </>
  );
};

const TaskSectionTwitter = ({
  selectedTwitterAction,
  setSelectedTwitterAction,
  register,
  errors,
  twitterFollow,
  setTwitterFollow,
  twitterLike,
  setTwitterLike,
}: {
  selectedTwitterAction: any;
  setSelectedTwitterAction: any;
  register: any;
  errors: any;
  twitterFollow: any;
  setTwitterFollow: any;
  twitterLike: any;
  setTwitterLike: any;
}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="grid grid-cols-12 gap-2 mb-1">
          <div className="col-span-4 text-[12px] opacity-50">Task:</div>
          <div className="col-span-5 text-[12px] opacity-50">Twitter URL:</div>
          <div className="col-span-3 grid grid-cols-2">
            <div className="col-span-1 text-[12px] opacity-50">Like</div>
            <div className="col-span-1 text-[12px] opacity-50">Retweet</div>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-4">
            <TwitterActionList
              selectedTwitterAction={selectedTwitterAction}
              setSelectedTwitterAction={setSelectedTwitterAction}
            />
          </div>
          <div className="col-span-5">
            <input
              {...register("twitterUrl")}
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300 text-black pl-3 w-full rounded-md py-2"
              placeholder="URL"
            />
          </div>
          <div className="col-span-3 grid grid-cols-2">
            <div className="col-span-1 ">
              <Toggle enabled={twitterLike} setEnabled={setTwitterLike} />
            </div>
            <div className="col-span-1">
              <Toggle enabled={twitterFollow} setEnabled={setTwitterFollow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TaskSectionLens = ({
  selectedLensAction,
  setSelectedLensAction,
  lensFollow,
  setLensFollow,
  lensMirror,
  setLensMirror,
  register,
  errors,
}: {
  selectedLensAction: any;
  setSelectedLensAction: any;
  lensFollow: any;
  setLensFollow: any;
  lensMirror: any;
  setLensMirror: any;
  register: any;
  errors: any;
}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="grid grid-cols-12 gap-2 mb-1">
          <div className="col-span-4 text-[12px] opacity-50 text-white">
            Task:
          </div>
          <div className="col-span-5 text-[12px] opacity-50">Post URL:</div>
          <div className="col-span-3 grid grid-cols-2">
            <div className="col-span-1 text-[12px] opacity-50">Collect</div>
            <div className="col-span-1 text-[12px] opacity-50">Mirror</div>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-4">
            <LensActionList />
          </div>
          <div className="col-span-5">
            <input
              {...register("lensUrl")}
              className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs border-gray-300
               text-black pl-3 w-full rounded-md py-2"
              placeholder="URL"
            />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-2">
            <div className="col-span-1 ">
              <Toggle enabled={lensMirror} setEnabled={setLensMirror} />
            </div>

            <div className="col-span-1">
              <Toggle enabled={lensFollow} setEnabled={setLensFollow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function TwitterActionList({
  selectedTwitterAction,
  setSelectedTwitterAction,
}: {
  selectedTwitterAction: any;
  setSelectedTwitterAction: any;
}) {
  return (
    <Listbox value={selectedTwitterAction} onChange={setSelectedTwitterAction}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button
              className="bg-white text-black relative w-full border border-gray-300 
            rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1  sm:text-sm"
            >
              <span>{selectedTwitterAction.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md 
              py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {twitter.map((twi) => (
                  <Listbox.Option
                    key={twi.name}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={twi}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal ",
                            "block truncate"
                          )}
                        >
                          {twi.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

function LensActionList() {
  const [selected, setSelected] = useState(lens[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button
              className="bg-white text-black relative w-full border border-gray-300 
            rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1  sm:text-sm"
            >
              <span>{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1
               text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {lens.map((l) => (
                  <Listbox.Option
                    key={l.name}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={l}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal ",
                            "block truncate"
                          )}
                        >
                          {l.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

function TokenList({
  selected,
  setSelected,
}: {
  selected: any;
  setSelected: any;
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white relative w-full border text-black border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1  sm:text-sm">
              <span className="flex gap-2">
                <Image
                  alt="token"
                  width={18}
                  height={18}
                  src={`https://app.aave.com/icons/tokens/${selected.name.toLowerCase()}.svg`}
                />
                {selected.name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {tokens.map((token) => (
                  <Listbox.Option
                    key={token.address}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={token}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected
                              ? "font-semibold"
                              : "font-normal flex gap-2",
                            "block truncate"
                          )}
                        >
                          <Image
                            width={18}
                            height={18}
                            alt="token"
                            src={`https://app.aave.com/icons/tokens/${token.name.toLowerCase()}.svg`}
                          />
                          {token.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

function TargetList({
  selected,
  setSelected,
}: {
  selected: any;
  setSelected: any;
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white relative w-full border text-black border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex gap-2">{selected}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {targets.map((target) => (
                  <Listbox.Option
                    key={target}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={target}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected
                              ? "font-semibold"
                              : "font-normal flex gap-2",
                            "block truncate"
                          )}
                        >
                          {target}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

function Toggle({ enabled, setEnabled }: { enabled: any; setEnabled: any }) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "bg-indigo-600" : "bg-gray-200",
        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        )}
      >
        <span
          className={classNames(
            enabled
              ? "opacity-0 ease-out duration-100"
              : "opacity-100 ease-in duration-200",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={classNames(
            enabled
              ? "opacity-100 ease-in duration-200"
              : "opacity-0 ease-out duration-100",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </Switch>
  );
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    twitterUrl: yup.string().notRequired(),
    lensUrl: yup.string().notRequired(),
    rewardToken: yup.string().notRequired(),
    tokenWinners: yup.string().notRequired(),
    tokenAddress: yup.string().notRequired(),
    nftRedirect: yup.string().notRequired(),
    nftWinners: yup.string().notRequired(),
    nftAddress: yup.string().notRequired(),
  })
  .required();

interface IFormsInputs {
  title: string;
  description: string;
  twitterUrl: string;
  lensUrl: string;
  rewardToken: number;
  tokenWinners: number;
  tokenAddress: string;
}

const FormData = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [timings, setTimings] = useState("automatic");
  const [selectedTarget, setSelectedTarget] = useState(targets[0]);
  const [displayTarget, setDisplayTarget] = useState(false);
  const [displayTargetSelect, setDisplayTargetSelect] = useState(false);
  const [selectedTwitterAction, setSelectedTwitterAction] = useState(
    twitter[0]
  );
  const [twitterFollow, setTwitterFollow] = useState(false);
  const [twitterLike, setTwitterLike] = useState(false);

  const [selectedLensAction, setSelectedLensAction] = useState(lens[0]);
  const [lensFollow, setLensFollow] = useState(false);
  const [lensMirror, setLensMirror] = useState(false);

  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [rewardToAll, setRewardToAll] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormsInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormsInputs) => {
    const ipfsHash = await uploadIpfs({
      ...data,
      startDate,
      endDate,
      timings,
      selectedTarget,
      selectedTwitterAction,
      twitterFollow,
      twitterLike,
      selectedLensAction,
      lensFollow,
      lensMirror,
      selectedToken,
      rewardToAll,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-3xl leading-6 font-medium pt-5 pb-3">
              General
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="title"
                className="block text-base font-medium pb-1"
              >
                Campaign Title *
              </label>
              <p className="text-bright-red text-sm">{errors.title?.message}</p>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  {...register("title")}
                  placeholder="Campaign Title"
                  className="flex-1  block h-8 w-full min-w-0 rounded-md sm:text-xs text-black pl-3"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-base font-medium pb-1 pt-1"
              >
                Description *
              </label>
              <p className="text-bright-red text-sm">{errors.title?.message}</p>

              <div className="mt-1">
                <textarea
                  {...register("description")}
                  rows={10}
                  placeholder="Additional Info"
                  className="shadow-sm  pl-3 pt-3 block text-black w-full sm:text-xs border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="photo"
                className="block text-base font-medium pb-1"
              >
                Campaign Image *
              </label>

              <div className="mt-1 flex">
                {/* <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span> */}
                <button
                  type="button"
                  className="bg-white py-1 px-4 border rounded-md shadow-sm text-sm text-principal-gray font-medium focus:outline-none"
                >
                  UPLOAD
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-3xl leading-6 font-medium pt-6 pb-1">
                Settings
              </h3>
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-base font-medium pb-2"
              >
                Timings *
              </label>
              <div>
                <DateRangePicker
                  startDate={startDate}
                  endDate={endDate}
                  onStartDateChange={(data: any) => {
                    setStartDate(data);
                  }}
                  onEndDateChange={(data: any) => {
                    setEndDate(data);
                  }}
                  minimumDate={new Date()}
                  minimumLength={1}
                  format="dd MMM yyyy"
                  locale={enUS}
                >
                  {({ startDateInputProps, endDateInputProps, focus }) => (
                    <div className="date-range">
                      <input
                        className={
                          "input rounded-md pl-2 pt-1 pb-1 mr-2 w-1/3 text-black sm:text-xs" +
                          (focus === startDate ? " -focused" : "")
                        }
                        {...startDateInputProps}
                        placeholder="Start date"
                      />
                      <span className="date-range_arrow" />
                      <span> -&nbsp;&gt;</span>
                      <input
                        className={
                          "input rounded-md pl-2 pt-1 pb-1 ml-2 w-1/3 text-black sm:text-xs" +
                          (focus === endDate ? " -focused" : "")
                        }
                        {...endDateInputProps}
                        placeholder="End date"
                      />
                    </div>
                  )}
                </DateRangePicker>
              </div>
            </div>

            <div className="sm:col-span-6 flex gap-4 ">
              <div
                className={` p-2 mb-8 rounded-md w-full border-2 text-sm cursor-pointer hover:border-shade-3 ${
                  timings == "automatic"
                    ? "border-shade-3 bg-bright-blue"
                    : "border-principal-gray"
                }`}
                onClick={() => setTimings("automatic")}
              >
                AUTOMATIC
                <h5 className="text-[9px]">
                  Winners will be automatically drawn by the draw time you
                  setup.
                </h5>
              </div>
              <div
                className={` p-2 mb-8 rounded-md w-full border-2 text-sm cursor-pointer hover:border-shade-3 ${
                  timings == "manual"
                    ? "border-shade-3 bg-bright-blue"
                    : "border-principal-gray"
                }`}
                onClick={() => setTimings("manual")}
              >
                MANUAL
                <h5 className="text-[9px]">
                  Winners will be manually drawn by you.
                </h5>
              </div>
            </div>

            <div className="sm:col-span-6 mb-8 cursor-pointer ">
              <div
                className=" hover:border-shade-3  border-2 p-4 rounded-2xl border-principal-gray"
                onClick={() => setDisplayTarget(!displayTarget)}
              >
                <div
                  className={`flex gap-2 ${displayTargetSelect ? "mb-2" : ""}`}
                >
                  {" "}
                  <Target />
                  <div>{targets[0]}</div>
                </div>
                {displayTargetSelect && (
                  <div className="w-1/4">
                    <TargetList
                      selected={selectedTarget}
                      setSelected={setSelectedTarget}
                    />
                  </div>
                  // <Listbox
                  //   value={selectedTarget}
                  //   onChange={(e) => {
                  //     setSelectedTarget(e);
                  //     setDisplayTargetSelect(true);
                  //   }}
                  // >
                  //   <Listbox.Button>
                  //     <div className="bg-shade-3 p-2 rounded-md">{selectedTarget}</div>
                  //   </Listbox.Button>
                  //   <Listbox.Options>
                  //     {targets.map((t, i) => (

                  //       <Listbox.Option key={i} value={t} as={Fragment}>
                  //         {({ active, selected }) => (
                  //           <li
                  //             className={`p-2 ${
                  //               active ? "bg-blue-500 text-white" : "bg-white text-black"
                  //             }`}
                  //           >
                  //             {t}
                  //           </li>
                  //         )}
                  //       </Listbox.Option>
                  //     ))}
                  //   </Listbox.Options>
                  // </Listbox>
                )}
                {(displayTarget || displayTargetSelect) && (
                  <div className="mt-3">
                    <button
                      className="text-white bg-bright-blue rounded-lg px-2 hover:opacity-80"
                      onClick={(e) => {
                        e.preventDefault();
                        setDisplayTargetSelect(!displayTargetSelect);
                      }}
                    >
                      ADD FILTER
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="sm:col-span-6 mb-8">
              <h1 className="text-2xl mb-6">Prize</h1>
              <div className=" border-2 p-4 rounded-2xl border-principal-gray mb-5">
                <div className="flex gap-2 mb-3">
                  {" "}
                  <Target />
                  <h1>Token</h1>
                </div>
                <RewardSectionToken
                  selectedToken={selectedToken}
                  setSelectedToken={setSelectedToken}
                  number={1}
                  rewardToAll={rewardToAll}
                  setRewardToAll={setRewardToAll}
                  register={register}
                  errors={errors}
                />
              </div>
              <div className=" border-2 p-4 rounded-2xl border-principal-gray mb-8">
                <div className="flex gap-2 mb-3">
                  {" "}
                  <Target />
                  <h1>NFT</h1>
                </div>
                <RewardSectionNFT
                  number={1}
                  register={register}
                  errors={errors}
                />
              </div>
              <h1 className="text-2xl mb-8">Required tasks</h1>
              <div className=" border-2 p-4 rounded-2xl border-principal-gray mb-5">
                <div className="flex gap-2 mb-3">
                  {" "}
                  <Target />
                  <h1>Twitter</h1>
                </div>
                <TaskSectionTwitter
                  selectedTwitterAction={selectedTwitterAction}
                  setSelectedTwitterAction={setSelectedTwitterAction}
                  register={register}
                  errors={errors}
                  twitterFollow={twitterFollow}
                  setTwitterFollow={setTwitterFollow}
                  twitterLike={twitterLike}
                  setTwitterLike={setTwitterLike}
                />
              </div>
              <div className=" border-2 p-4 rounded-2xl border-principal-gray">
                <div className="flex gap-2 mb-3">
                  {" "}
                  <Target />
                  <h1>Lens</h1>
                </div>
                <TaskSectionLens
                  register={register}
                  errors={errors}
                  selectedLensAction={selectedLensAction}
                  setSelectedLensAction={setSelectedLensAction}
                  lensFollow={lensFollow}
                  setLensFollow={setLensFollow}
                  lensMirror={lensMirror}
                  setLensMirror={setLensMirror}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="uppercase ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm
             text-sm font-medium rounded-md text-white bg-bright-blue hover:opacity-80"
          >
            Create campaign
          </button>
        </div>
      </div>
    </form>
  );
};
