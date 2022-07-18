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
    <div className="pt-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Link href="/">
            <div className="flex items-center">
              <div
                className="w-8 h-8 mr-2 ICON_PLACEHOLDER"
                style={{ backgroundColor: "#ff996f" }}
              />
              <h2 className="text-2xl font-bold cursor-pointer">Tide Protocol</h2>
            </div>
          </Link>
          <Link href="/active-campaigns">
            <p className="text-sm cursor-pointer uppercase">Active Campaigns</p>
          </Link>
          <Link href="/my-campaigns">
            <p className="text-sm cursor-pointer uppercase">My Campaigns</p>
          </Link>
        </div>

        <Wallet />
      </div>
    </div>
  );
};

export default Navbar;
