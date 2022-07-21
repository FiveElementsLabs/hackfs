import React, { useState, Fragment } from "react";
import { Listbox, Transition, Switch } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DateRangePicker } from "react-nice-dates";
import { enUS } from "date-fns/locale";
import "react-nice-dates/build/style.css";

import Upload from "../../assets/svg/upload";
import Target from "../../assets/svg/target";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const twitter = [{ name: "Tweet interaction" }, { name: "Follow on Twitter" }];
const lens = [{ name: "Post interaction" }, { name: "Follow on Lens" }];
const tokens = [
  { name: "ETH", address: "0x123456890" },
  { name: "BTC", address: "0x0987654321" },
];

const CreateCampaignView = () => {
  const targets = ["Select Filter", "Anime watcher", "Manga reader", "Book reader", "Game player"];

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
}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex justify-between">
          <h1 className="mb-2">Reward #{number}</h1>

          <div className="flex">
            <h5 className="text-[12px] opacity-50 mr-2">Split between all participiants</h5>
            <Toggle enabled={rewardToAll} setEnabled={setRewardToAll} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 text-[12px] opacity-50">Select token:</div>
          <div className="col-span-6 text-[12px] opacity-50">Total amount:</div>
          <div className="col-span-3 text-[12px] opacity-50">Winner count:</div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-3">
            <TokenList selected={selectedToken} setSelected={setSelectedToken} />
          </div>

          <div className="col-span-6">
            <input
              {...register("rewardToken")}
              className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
              placeholder="Amount"
            />
          </div>
          <div className="col-span-3">
            <input
              {...register("tokenWinners")}
              className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
              placeholder="Winner(s)"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="col-span-3 text-[12px] opacity-50">Contract address:</div>

          <input
            {...register("tokenAddress")}
            className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
            placeholder="URL"
          />
        </div>
      </div>
    </>
  );
};
const RewardSectionNFT = ({ number, register, errors }) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex justify-between">
          <h1 className="mb-2">Reward #{number}</h1>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-9 text-[12px] opacity-50">NFT redirect link:</div>
          <div className="col-span-3 text-[12px] opacity-50">Winner count:</div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-9">
            <input
              {...register("nftRedirect")}
              className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
              placeholder="Nft redirect link"
            />
          </div>
          <div className="col-span-3">
            <input
              {...register("nftWinners")}
              className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
              placeholder="Winner(s)"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="col-span-3 text-[12px] opacity-50">Contract address:</div>

          <input
            {...register("nftAddress")}
            className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
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
}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="grid grid-cols-12 gap-2">
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
              className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
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
}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4 text-[12px] opacity-50">Task:</div>
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
              className="bg-shade-1 px-2 w-full rounded-md py-2 text-black"
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

function TwitterActionList({ selectedTwitterAction, setSelectedTwitterAction }) {
  return (
    <Listbox value={selectedTwitterAction} onChange={setSelectedTwitterAction}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white text-black relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span>{selectedTwitterAction.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
            <Listbox.Button className="bg-white text-black relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span>{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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

function TokenList({ selected, setSelected }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white relative w-full border text-black border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex gap-2">
                <img
                  width={18}
                  src={`https://app.aave.com/icons/tokens/${selected.name.toLowerCase()}.svg`}
                ></img>
                {selected.name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                            selected ? "font-semibold" : "font-normal flex gap-2",
                            "block truncate"
                          )}
                        >
                          <img
                            width={18}
                            src={`https://app.aave.com/icons/tokens/${token.name.toLowerCase()}.svg`}
                          ></img>
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

function Toggle({ enabled, setEnabled }) {
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
            enabled ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
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
            enabled ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100",
            "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </Switch>
  );
}

function classNames(...classes) {
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
  const targets = ["Select Filter", "Anime watcher", "Manga reader", "Book reader", "Game player"];

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [timings, setTimings] = useState("automatic");
  const [selectedTarget, setSelectedTarget] = useState(targets[0]);
  const [displayTarget, setDisplayTarget] = useState(false);
  const [displayTargetSelect, setDisplayTargetSelect] = useState(false);
  const [selectedTwitterAction, setSelectedTwitterAction] = useState(twitter[0]);
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

  const onSubmit = (data: IFormsInputs) =>
    console.log({
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-3xl leading-6 font-medium pt-5 pb-3">General</h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="title" className="block text-base font-medium pb-1">
                Giveaway Title *
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  {...register("title")}
                  placeholder="Giveaway Title"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block h-8 w-full min-w-0 rounded-md sm:text-xs border-gray-300 text-black pl-3"
                />

                <p>{errors.title?.message}</p>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-base font-medium pb-1 pt-1">
                Description *
              </label>
              <div className="mt-1">
                <textarea
                  {...register("description")}
                  rows={10}
                  placeholder="Additional Info"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pl-3 pt-3 block text-black w-full sm:text-xs border border-gray-300 rounded-md"
                />
                <p>{errors.description?.message}</p>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="photo" className="block text-base font-medium pb-1">
                Giveaway Image *
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
                  className="bg-white py-1 px-4 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  UPLOAD
                </button>
              </div>
            </div>

            <div>
            <h3 className="text-3xl leading-6 font-medium pt-6 pb-1">Settings</h3>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-base font-medium pb-2">
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
                          "input rounded-xl pl-3 pt-2 pb-2 mr-2 text-black text-xs" +
                          (focus === startDate ? " -focused" : "")
                        }
                        {...startDateInputProps}
                        placeholder="Start date"
                      />
                      <span className="date-range_arrow" />
                      <span> -&nbsp;&gt;</span>
                      <input
                        className={
                          "input rounded-xl pl-3 pt-2 pb-2 ml-2 text-black text-xs " +
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
                className={` p-2 mb-8 rounded-md w-full border-2 text-sm cursor-pointer ${
                  timings == "automatic" ? "border-shade-3" : "border-principal-gray"
                }`}
                onClick={() => setTimings("automatic")}
              >
                AUTOMATIC
                <h5 className="text-[9px]">
                  Winners will be automatically drawn by the draw time you setup.
                </h5>
              </div>
              <div
                className={` p-2 mb-8 rounded-md w-full border-2 text-sm cursor-pointer ${
                  timings == "manual" ? "border-shade-3" : "border-principal-gray"
                }`}
                onClick={() => setTimings("manual")}
              >
                MANUAL
                <h5 className="text-[9px]">Winners will be manually drawn by you.</h5>
              </div>
            </div>

            <div className="sm:col-span-6 mb-8 cursor-pointer">
              <div
                className=" border-2 p-4 rounded-2xl border-principal-gray"
                onClick={() => setDisplayTarget(!displayTarget)}
              >
                <div className={`flex gap-2 ${displayTargetSelect ? "mb-2" : ""}`}>
                  {" "}
                  <Target />
                  <div>{targets[0]}</div>
                </div>
                {displayTargetSelect && (
                  <Listbox
                    value={selectedTarget}
                    onChange={(e) => {
                      setSelectedTarget(e);
                      setDisplayTargetSelect(true);
                    }}
                  >
                    <Listbox.Button>
                      <div className="bg-shade-3 p-2 rounded-md">{selectedTarget}</div>
                    </Listbox.Button>
                    <Listbox.Options>
                      {targets.map((t, i) => (
                        /* Use the `active` state to conditionally style the active option. */
                        /* Use the `selected` state to conditionally style the selected option. */
                        <Listbox.Option key={i} value={t} as={Fragment}>
                          {({ active, selected }) => (
                            <li
                              className={`p-2 ${
                                active ? "bg-blue-500 text-white" : "bg-white text-black"
                              }`}
                            >
                              {t}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                )}
                {(displayTarget || displayTargetSelect) && (
                  <div className="p-2">
                    <button
                      className="text-shade-3"
                      onClick={() => {
                        setDisplayTargetSelect(!displayTargetSelect);
                      }}
                    >
                      + ADD FILTER
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="sm:col-span-6 mb-8">
              <h1 className="text-2xl mb-6">Prize</h1>
              <div className=" border-2 p-4 rounded-2xl border-principal-gray">
                <div className="flex gap-2 mb-2">
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
              <div className=" border-2 p-4 rounded-2xl border-principal-gray">
                <div className="flex gap-2 mb-2">
                  {" "}
                  <Target />
                  <h1>NFT</h1>
                </div>
                <RewardSectionNFT number={1} register={register} errors={errors} />
              </div>
              <h1 className="text-2xl mb-6">Required tasks</h1>
              <div className=" border-2 p-4 rounded-2xl border-principal-gray">
                <div className="flex gap-2 mb-2">
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
                <div className="flex gap-2 mb-2">
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
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
