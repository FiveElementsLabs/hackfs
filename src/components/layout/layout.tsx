import { useMemo } from "react";
import { useSharedState } from "../../lib/store";
import { useWallet } from "../../hooks/useWallet";
import Wallet from "./wallet";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [{ account }] = useSharedState();
  const { autoLoginWallet } = useWallet();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => (!account ? autoLoginWallet() : null), [account]);

  return (
    <div
      style={{ backgroundImage: "linear-gradient(to right, #FFFFFF, #BAEBFF)", minHeight: "100vh" }}
      className="dark:bg-black dark:text-white dark:text-black"
    >
      <Navbar />
      <main className="max-w-4xl mx-auto">{children}</main>
    </div>
  );
};
export default Layout;
