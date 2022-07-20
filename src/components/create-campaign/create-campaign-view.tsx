import React, { useState, Fragment } from "react";
import { Listbox, Transition, Switch } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import Upload from "../../assets/svg/upload";
import Target from "../../assets/svg/target";

const CreateCampaignView = () => {
  const targets = ["Select Filter", "Anime watcher", "Manga reader", "Book reader", "Game player"];

  const [timings, setTimings] = useState("automatic");
  const [selectedTarget, setSelectedTarget] = useState(targets[0]);
  const [displayTarget, setDisplayTarget] = useState(false);
  const [displayTargetSelect, setDisplayTargetSelect] = useState(false);

  return (
    <div className=" bg-principal-lightgray text-principal-blue px-32 py-8 rounded-xl">
      <h1 className="text-2xl mb-6">General</h1>
      <h3 className="mb-2">Giveaway Title *</h3>
      <input
        type="text"
        className="bg-shade-1 px-2 mb-8 w-full py-1 rounded-md"
        placeholder="Giveaway Title"
      />
      <h3 className="mb-2">Description *</h3>
      <textarea
        className="bg-shade-1 px-2 mb-8 w-full py-1 rounded-md"
        placeholder="Additional Info"
      ></textarea>
      <h3 className="mb-2">Giveaway Image *</h3>
      <div
        className=" px-2 mb-8 py-1 rounded-md border-2 border-shade-3 text-shade-3 w-fit flex gap-2"
        onClick={() => console.log("Upload image")}
      >
        <Upload />
        UPLOAD
      </div>
      <h1 className="text-2xl mb-6">Settings</h1>
      <h3 className="mb-2">Timings *</h3>
      <div className="flex">
        <input
          type="text"
          className="bg-shade-1 px-2 mb-8 w-full py-1 rounded-md"
          placeholder="Giveaway Title"
        />
        <h5 className="mx-4">-&nbsp;&gt;</h5>
        <input
          type="text"
          className="bg-shade-1 px-2 mb-8 w-full py-1 rounded-md"
          placeholder="Giveaway Title"
        />
      </div>
      <div className="flex gap-4">
        <div
          className={` p-2 mb-8 rounded-md w-full border-2 text-sm ${
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
          className={` p-2 mb-8 rounded-md w-full border-2 text-sm ${
            timings == "manual" ? "border-shade-3" : "border-principal-gray"
          }`}
          onClick={() => setTimings("manual")}
        >
          MANUAL
          <h5 className="text-[9px]">Winners will be manually drawn by you.</h5>
        </div>
      </div>
      <div className="mb-8">
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
                <div className="bg-shade-1 p-2 rounded-md">{selectedTarget}</div>
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
      <h1 className="text-2xl mb-6">Prize</h1>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex gap-2 mb-2">
          {" "}
          <Target />
          <h1>Token</h1>
        </div>
        <RewardSectionToken number={1} />
      </div>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex gap-2 mb-2">
          {" "}
          <Target />
          <h1>NFT</h1>
        </div>
        <RewardSectionNFT number={1} />
      </div>
      <h1 className="text-2xl mb-6">Required tasks</h1>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex gap-2 mb-2">
          {" "}
          <Target />
          <h1>Twitter</h1>
        </div>
        <TaskSectionTwitter />
      </div>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex gap-2 mb-2">
          {" "}
          <Target />
          <h1>Lens</h1>
        </div>
        <TaskSectionLens />
      </div>
    </div>
  );
};

export default CreateCampaignView;

const RewardSectionToken = ({ number }) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex justify-between">
          <h1 className="mb-2">Reward #{number}</h1>

          <div className="flex">
            <h5 className="text-[12px] opacity-50 mr-2">Split between all participiants</h5>
            <Toggle />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 text-[12px] opacity-50">Select token:</div>
          <div className="col-span-6 text-[12px] opacity-50">Total amount:</div>
          <div className="col-span-3 text-[12px] opacity-50">Winner count:</div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-3">
            <TokenList />
          </div>
          <div className="col-span-6">
            <input
              type="text"
              className="bg-shade-1 px-2 w-full rounded-md py-2"
              placeholder="Amount"
            />
          </div>
          <div className="col-span-3">
            <input
              type="text"
              className="bg-shade-1 px-2 w-full rounded-md py-2"
              placeholder="Winner(s)"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="col-span-3 text-[12px] opacity-50">Contract address:</div>

          <input type="text" className="bg-shade-1 px-2 w-full rounded-md py-2" placeholder="URL" />
        </div>
      </div>
    </>
  );
};
const RewardSectionNFT = ({ number }) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="flex justify-between">
          <h1 className="mb-2">Reward #{number}</h1>

          <div className="flex">
            <h5 className="text-[12px] opacity-50 mr-2">Split between all participiants</h5>
            <Toggle />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-9 text-[12px] opacity-50">NFT redirect link:</div>
          <div className="col-span-3 text-[12px] opacity-50">Winner count:</div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-9">
            <input
              type="text"
              className="bg-shade-1 px-2 w-full rounded-md py-2"
              placeholder="Nft redirect link"
            />
          </div>
          <div className="col-span-3">
            <input
              type="text"
              className="bg-shade-1 px-2 w-full rounded-md py-2"
              placeholder="Winner(s)"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="col-span-3 text-[12px] opacity-50">Contract address:</div>

          <input type="text" className="bg-shade-1 px-2 w-full rounded-md py-2" placeholder="URL" />
        </div>
      </div>
    </>
  );
};

const TaskSectionTwitter = ({}) => {
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
            <TwitterActionList />
          </div>
          <div className="col-span-5">
            <input
              type="text"
              className="bg-shade-1 px-2 w-full rounded-md py-2"
              placeholder="URL"
            />
          </div>
          <div className="col-span-3 grid grid-cols-2">
            <div className="col-span-1 ">
              <Toggle />
            </div>
            <div className="col-span-1">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TaskSectionLens = ({}) => {
  return (
    <>
      <div className=" border-2 p-4 rounded-2xl border-principal-gray">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4 text-[12px] opacity-50">Task:</div>
          <div className="col-span-5 text-[12px] opacity-50">Post URL:</div>
          <div className="col-span-3 grid grid-cols-3">
            <div className="col-span-1 text-[12px] opacity-50">Collect</div>
            <div className="col-span-1 text-[12px] opacity-50">Like</div>
            <div className="col-span-1 text-[12px] opacity-50">Mirror</div>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-2 ">
          <div className="col-span-4">
            <LensActionList />
          </div>
          <div className="col-span-5">
            <input
              type="text"
              className="bg-shade-1 px-2 w-full rounded-md py-2"
              placeholder="URL"
            />
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-2">
            <div className="col-span-1 ">
              <Toggle />
            </div>
            <div className="col-span-1">
              <Toggle />
            </div>
            <div className="col-span-1">
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TokenList() {
  const tokens = [
    { name: "ETH", address: "0x123456890" },
    { name: "BTC", address: "0x0987654321" },
  ];
  const [selected, setSelected] = useState(tokens[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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

function TwitterActionList() {
  const twitter = [{ name: "Tweet interaction" }, { name: "Follow on Twitter" }];
  const [selected, setSelected] = useState(twitter[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
  const lens = [{ name: "Post interaction" }, { name: "Follow on Lens" }];
  const [selected, setSelected] = useState(lens[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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

function Toggle() {
  const [enabled, setEnabled] = useState(false);

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
