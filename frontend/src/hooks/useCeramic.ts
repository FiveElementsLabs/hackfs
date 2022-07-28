import { useState, useEffect, useCallback } from "react";
import { useViewerRecord } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";
import { useSharedState } from "../lib/store";
import { createTwitter, findTwitter, IdentityLink } from "../lib/identityLink";

export const useCeramic = () => {
  const [{ account, did }] = useSharedState();

  const createAuthProvider = async () => {
    if (typeof window === "undefined") return;
    return new EthereumAuthProvider((window as any).ethereum, account);
  };

  const useBasicProfile = () => useViewerRecord("basicProfile");
  const useSocialAccounts = () => useViewerRecord("alsoKnownAs");

  const useIdentityLink = (url?: string): IdentityLink => {
    const [identityLink, setIdentityLink] = useState(
      () => new IdentityLink(url)
    );
    useEffect(() => {
      setIdentityLink(new IdentityLink(url));
    }, [url]);
    return identityLink;
  };

  const useAddTwitterAttestation = (identityLink: IdentityLink) => {
    const accountsRecord = useSocialAccounts();

    return useCallback(
      async (
        did: any,
        username: string,
        challengeCode: string
      ): Promise<boolean> => {
        if (!accountsRecord.isMutable || accountsRecord.isMutating) {
          return false;
        }

        const attestation = await identityLink.confirmTwitterChallenge(
          did,
          challengeCode
        );
        const accounts = accountsRecord.content?.accounts ?? [];

        const existing = findTwitter(accounts, username);
        if (existing == null) {
          accounts.push(createTwitter(username, attestation));
        } else {
          existing.attestations = existing.attestations ?? [];
          existing.attestations.push({ "did-jwt-vc": attestation });
        }

        await accountsRecord.set({ accounts });
        return true;
      },
      [accountsRecord, identityLink]
    );
  };

  return {
    createAuthProvider,
    useBasicProfile,
    useSocialAccounts,
    useIdentityLink,
    useAddTwitterAttestation,
  };
};
