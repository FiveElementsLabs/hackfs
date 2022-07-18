import React from "react";
import { useMemo } from "react";
import { useSharedState } from "../../lib/store";
import { useWallet } from "../../hooks/useWallet";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [{ account }] = useSharedState();
  const { autoLoginWallet } = useWallet();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => (!account ? autoLoginWallet() : null), [account]);

  return (
    <div className="text-white min-h-screen bg-gradient-to-t from-tide-darker to-tide-dark">
      <Navbar />
      <main className="max-w-4xl mx-auto">{children}</main>
    </div>
  );
};
export default Layout;
