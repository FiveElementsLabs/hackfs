import { usePublicRecord, useViewerRecord } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";
import { useSharedState } from "../lib/store";

export const useCeramic = () => {
  const [{ account, did }] = useSharedState();

  const createAuthProvider = async () => {
    if (typeof window === "undefined") return;
    return new EthereumAuthProvider((window as any).ethereum, account);
  };

  const useBasicProfile = () => {
    console.log(did);
    const record = useViewerRecord("basicProfile");
    return record?.isLoading ? "Loading..." : record?.content ? record?.content : null;
  };

  const useSocialAccounts = () => {
    const record = usePublicRecord("alsoKnownAs", did);
    return record?.isLoading ? "Loading..." : record?.content ? record?.content : null;
  };

  const useAuthConnection = async () => {
    // The following configuration assumes your local node is connected to the Clay testnet
  };

  return { useAuthConnection, createAuthProvider, useBasicProfile, useSocialAccounts };
};
