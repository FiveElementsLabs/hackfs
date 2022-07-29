import { Fragment, useMemo } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useSharedState } from "../../lib/store";
import { useWallet } from "../../hooks/useWallet";
import { shortenAddress } from "../../lib/helpers";
import networks, { network } from "../../lib/networks";

const IS_MULTICHAIN = false;

const classNames = (...classes: any) => classes.filter(Boolean).join(" ");

export default function Wallet() {
  const [{ account, network_name, chain_id }] = useSharedState();
  const { loginWallet, logoutWallet, changeNetwork } = useWallet();

  const selectedNetwork = useMemo<network | null>(
    () => (chain_id ? networks?.[chain_id] : null),
    [chain_id]
  );

  return (
    <div className="flex items-center w-auto text-tide-darker">
      {network_name && IS_MULTICHAIN && (
        <div>
          <Listbox
            value={selectedNetwork}
            onChange={(n) =>
              changeNetwork(Number(n?.chainId).toString(10) || "137")
            }
          >
            {({ open }) => (
              <>
                <div className="relative cursor-pointer">
                  <Listbox.Button
                    className="bg-bright-blue relative w-full  text-tide-darker
                  rounded-md shadow-sm pl-3 pr-24 py-2 text-left cursor-pointer focus:outline-none 
                  focus:ring-none sm:text-sm font-medium hover:opacity-80"
                  >
                    <span className="block truncate">
                      {selectedNetwork?.chainName || "Wrong Network"}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
                      <SelectorIcon
                        className="h-5 w-5 text-tide-darker"
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
                      className="absolute z-10 mt-1 w-full bg-bright-blue shadow-lg rounded-lg
                    py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {Object.values(networks).map((network: network) => (
                        <Listbox.Option
                          key={network.chainId}
                          value={network}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-principal-lightgray bg-bright-blue hover:opacity-80"
                                : "text-principal-lightgray bg-bright-blue ",
                              "cursor-pointer select-none relative py-2 pl-3 pr-9"
                            )
                          }
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-bold" : "font-normal ",
                                  "block truncate"
                                )}
                              >
                                {network.chainName}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-principal-lightgray"
                                      : "text-principal-gray",
                                    "absolute inset-y-0 right-0 flex items-center pr-4 hover:opacity-80"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
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
        </div>
      )}

      {account ? (
        <button
          className="ml-2 py-2 px-4 rounded-md shadow-sm 
          text-sm bg-bright-blue  text-tide-darker font-medium hover:opacity-80"
          onClick={logoutWallet}
        >
          {shortenAddress(account)}
        </button>
      ) : (
        <button
          className="py-2 px-4 box-border rounded-md shadow-sm 
          text-sm bg-bright-blue  text-tide-darker font-medium uppercase hover:opacity-80"
          onClick={loginWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
