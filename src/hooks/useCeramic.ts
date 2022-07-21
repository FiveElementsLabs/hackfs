import { usePublicRecord, useViewerConnection, useViewerRecord } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";
import { useSharedState } from "../lib/store";

export const useCeramic = () => {
  const [{ account }] = useSharedState();

  const createAuthProvider = async () => {
    if (typeof window === "undefined") return;
    return new EthereumAuthProvider((window as any).ethereum, account);
  };

  function ShowProfileName({ did }: { did: any }) {
    const record = usePublicRecord("basicProfile", did);

    return record.isLoading
      ? "Loading..."
      : record.content
      ? `Hello ${record.content.name || "stranger"}`
      : "No profile to load";
  }
};
