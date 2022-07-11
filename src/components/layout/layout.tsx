import { useMemo } from "react";
import { useSharedState } from "../../lib/store";
import { useWallet } from "../../hooks/useWallet";
import Wallet from "./wallet";

const Layout = ({ children }) => {
  const [{ account }] = useSharedState();
  const { autoLoginWallet } = useWallet();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => (!account ? autoLoginWallet() : null), [account]);

  return (
    <div style={{ minHeight: "100vh" }} className="dark:bg-black text-white dark:text-black">
      <div className="max-w-3xl px-2">
        <div className="pt-4">
          <Wallet />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};
export default Layout;
