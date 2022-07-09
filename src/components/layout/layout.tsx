import { useMemo } from "react";
import { useSharedState } from "../../lib/store";
import { useWallet } from "../../hooks/useWallet";
import Wallet from "../Wallet";

const Layout = ({ children }) => {
  const [{ account }] = useSharedState();
  const { autoLoginWallet } = useWallet();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => (!account ? autoLoginWallet() : null), [account]);

  return (
    <div className="max-w-3xl px-2">
      <div className="mt-4">
        <Wallet />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
