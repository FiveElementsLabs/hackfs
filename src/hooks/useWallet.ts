import { ethers } from "ethers";
import { useSharedState } from "../lib/store";
import actions from "../lib/actions";
import networks from "../lib/networks";

export const useWallet = () => {
  const [, dispatch] = useSharedState();

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

      // toast({
      //   title: "Wallet Connected",
      //   description: "You are now connected to your wallet",
      //   status: "success",
      //   duration: 5000,
      //   position: "bottom-right",
      // });
    } catch (err) {
      console.error(err);
    }
  };

  const autoLoginWallet = async () => {
    if (typeof window !== "undefined") {
      const shouldAutoConnect = window.localStorage.getItem("shouldConnectMetamask") === "true";

      if (shouldAutoConnect) {
        await loginWallet();
      }
    }
  };

  const logoutWallet = async () => {
    dispatch({ type: actions.LOGOUT_WALLET });
    // toast({
    //   title: "Wallet Disconnected",
    //   description: "You are now disconnected from your wallet",
    //   status: "success",
    //   duration: 5000,
    //   position: "bottom-right",
    // });
  };

  const changeNetwork = async (chainId: string) => {
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
    } catch (switchError) {
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
        } catch (addError) {
          console.error(addError?.message);
          // toast({
          //   title: "Could not change network",
          //   description: "Please try again later",
          //   status: "error",
          //   duration: 5000,
          //   position: "bottom-right",
          // });
        }
      }
      console.error("useWallet::changeNetwork:", switchError?.message);
    }
  };

  return { loginWallet, autoLoginWallet, logoutWallet, changeNetwork };
};
