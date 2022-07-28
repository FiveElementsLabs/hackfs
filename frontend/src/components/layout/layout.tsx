import React from "react";
import { useMemo } from "react";
import { useSharedState } from "../../lib/store";
import { useWallet } from "../../hooks/useWallet";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: any }) => {
  const [{ account }] = useSharedState();
  const { autoLoginWallet } = useWallet();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => (!account ? autoLoginWallet() : null), [account]);

  return (
    <div className="text-light-bg">
      <Navbar />

      <div className="relative -z-10 bg-dark-bg min-h-screen">
        <main className="max-w-4xl mx-auto ">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
