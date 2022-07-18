import React from "react";
import Link from "next/link";
import Wallet from "./wallet";
import { getCredentials } from "../../api/getCredentialGalaxy";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    (async () => await getCredentials("0x7d06dE4aE53Ef27Fff2B34731C97bb44FD27D9E6"))();
  }, []);
  return (
    <div className="py-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-10 flex items-center">
            <Link href="/">
              <div className="flex">
                <div
                  className="w-8 mr-2 ICON_PLACEHOLDER"
                  style={{ backgroundColor: "#ff996f" }}
                ></div>
                <h2 className="text-3xl mr-16 cursor-pointer">Tide Protocol</h2>
              </div>
            </Link>
            <Link href="/active-campaigns">
              <p className="text-sm mr-16 cursor-pointer">ACTIVE CAMPAIGNS</p>
            </Link>
            <Link href="/my-campaigns">
              <p className="text-sm cursor-pointer">MY CAMPAIGNS</p>
            </Link>
          </div>
          <div className="col-span-2">
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
