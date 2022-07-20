import { ethers } from "ethers";
import { useSharedState } from "../lib/store";
import { useNotifications } from "./useNotifications";
import actions from "../lib/actions";
import networks from "../lib/networks";

export const useWallet = () => {
  const [{ account }, dispatch] = useSharedState();
  const { notify } = useNotifications();

  const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const account = (await provider.send("eth_requestAccounts", []))[0];
    const { chainId: chain_id } = await provider.getNetwork();
    const network_name = chain_id in networks ? networks[chain_id].chainName : "Wrong Network";

    dispatch({
      type: actions.LOGIN_WALLET,
      payload: { account, provider, network_name, chain_id },
    });
  };

  const loginWallet = async () => {
    try {
      await connectMetamask();
    } catch (err) {
      console.error(err);
    }
  };

  const autoLoginWallet = async () => {
    if (typeof window !== "undefined") {
      const shouldAutoConnect = window.localStorage.getItem("shouldConnectMetamask") === "true";

      if (shouldAutoConnect) await loginWallet();
    }
  };

  const logoutWallet = async () => {
    dispatch({ type: actions.LOGOUT_WALLET });
    notify("success", "Wallet disconnected");
  };

  const changeNetwork = async (chainId: any) => {
    if (!(window as any).ethereum) return;
    try {
      await (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: networks[chainId].chainId }],
      });
      const Web3Provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const { name: network_name, chainId: chain_id } = await Web3Provider.getNetwork();
      dispatch({
        type: actions.CHANGE_NETWORK,
        payload: { provider: Web3Provider, network_name, chain_id },
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to Metamask yet
      if (switchError.code === 4902) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{ ...networks[chainId] }],
          });
          const Web3Provider = new ethers.providers.Web3Provider((window as any).ethereum);
          const { name: network_name, chainId: chain_id } = await Web3Provider.getNetwork();
          dispatch({
            type: actions.CHANGE_NETWORK,
            payload: { provider: Web3Provider, network_name, chain_id },
          });
        } catch (addError: any) {
          console.error(addError?.message);
          notify("error", "Could not change network");
        }
      }
      console.error("useWallet::changeNetwork:", switchError?.message);
    }
  };

  return { loginWallet, autoLoginWallet, logoutWallet, changeNetwork };
};
