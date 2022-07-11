import { useMemo } from "react";
import { useSharedState } from "../../lib/store";
import { useWallet } from "../../hooks/useWallet";
import Wallet from "../Wallet";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [{ account }] = useSharedState();
  const { autoLoginWallet } = useWallet();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => (!account ? autoLoginWallet() : null), [account]);

  return (
    <div className="">
      <div className="">
        <Navbar />
        <main className="max-w-4xl mx-auto">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
