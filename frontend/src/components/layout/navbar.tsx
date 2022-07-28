import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Wallet from "./wallet";
import MoreSvg from "../../assets/svg/MoreDots";
import TideLogo from "../../assets/svg/TideLogo";
import Fel from "../../assets/svg/FiveElements";
import Docs from "../../assets/svg/Docs";
import Contact from "../../assets/svg/Contact";
import Medium from "../../assets/svg/Medium";
import Twitter from "../../assets/svg/Twitter";
import Discord from "../../assets/svg/Discord";
import Lens from "../../assets/svg/Lens";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <div className="bg-principal-blue py-2 z-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center">
                <div className="scale-75">
                  <TideLogo />
                </div>
                <h2 className="text-4xl font-medium cursor-pointer">tide</h2>
              </div>
            </Link>

            <Link href="/active-campaigns">
              <p
                className={`text-sm cursor-pointer font-medium uppercase hover:text-shade-2 ${
                  pathname === "/active-campaigns"
                    ? "text-shade-2 underline-thickness-2 underline underline-offset-4 "
                    : ""
                }`}
              >
                Active Campaigns
              </p>
            </Link>

            <Link href="/my-campaigns">
              <p
                className={`text-sm cursor-pointer font-medium uppercase hover:text-shade-2 ${
                  pathname === "/my-campaigns"
                    ? "text-shade-2 underline-thickness-2 underline underline-offset-4"
                    : ""
                }`}
              >
                Campaigns owned
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Wallet />
            <InfoDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const InfoDropdown = () => {
  return (
    <Menu
      as="div"
      className="grid place-content-center no-outline md:float-right relative w-mobile-100 "
    >
      <Menu.Button className="bg-bright-blue rounded-md w-12 grid place-content-center no-outline h-12 md:h-9 hover:opacity-80">
        <MoreSvg />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute z-10 right-0 md:right-1 top-0 md:top-11 w-64 origin-top-right 
        rounded-md border-secondary border-2 focus:outline-none p-1 bg-dark-card "
        >
          {infoDropdownData.map((item, index) => (
            <div key={index} className={`${item.border ? "mt-2" : ""}`}>
              {item.desktop && (
                <div
                  className={`px-1 hover:opacity-90 hover:bg-bright-blue${
                    item.border
                      ? "border-t border-principal-lightgray py-2 "
                      : ""
                  }`}
                  key={index}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-second primary" : "text-gray"
                        } flex w-full items-center rounded-md py-2 text-sm`}
                        onClick={() => window.open(item.link, "_blank")}
                      >
                        <div className="w-9 flex justify-center items-center scale-90">
                          <item.icon />
                        </div>
                        <span className="text-sm">{item.name}</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              )}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const infoDropdownData = [
  {
    icon: Fel,
    link: "https://fiveelementslabs.com/",
    name: "By Five Elements Labs",
    height: "7",
    width: "7",
    border: false,
    mobile: true,
    desktop: true,
  },
  {
    icon: Contact,
    link: "https://fiveelementslabs.com/",
    name: "Contact us",
    height: "7",
    border: false,
    width: "5",

    mobile: true,
    desktop: true,
  },
  {
    icon: Docs,
    link: "https://fiveelementslabs.gitbook.io/tide/",
    name: "Docs",
    height: "6",
    width: "5",

    border: false,
    mobile: true,
    desktop: true,
  },
  {
    icon: Twitter,
    link: "https://twitter.com/TideProtocol",
    name: "Twitter",
    height: "7",
    width: "5",
    border: false,
    mobile: true,
    desktop: true,
  },
  {
    icon: Lens,
    link: "https://twitter.com/TideProtocol",
    name: "Lens",
    height: "7",
    width: "6",

    border: false,
    mobile: true,
    desktop: true,
  },
  {
    icon: Discord,
    link: "https://discord.gg/tide",
    name: "Discord",
    height: "7",
    width: "5",

    border: false,
    mobile: true,
    desktop: true,
  },
];
