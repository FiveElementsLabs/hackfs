import React, { useMemo, useEffect } from "react";
import { useViewerConnection } from "@self.id/react";
import { useCeramic } from "../../hooks/useCeramic";
import { useSharedState } from "../../lib/store";
import actions from "../../lib/actions";

const ConnectButton = () => {
  const [{ did }, dispatch] = useSharedState();
  const { createAuthProvider } = useCeramic();
  const [connection, connect, disconnect] = useViewerConnection();

  const newDid = useMemo(() => (connection as any)?.selfID?.id || null, [connection]);

  useEffect(() => {
    if (!did) dispatch({ type: actions.SET_DID, payload: { did: newDid } });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newDid]);

  return connection.status === "connected" ? (
    <button
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium 
    rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => disconnect()}
    >
      Connected with your Digital ID
    </button>
  ) : "ethereum" in window ? (
    <button
      disabled={connection.status === "connecting"}
      onClick={() => createAuthProvider().then(connect as any)}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium 
                rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-indigo-500"
    >
      Connect with Ceramic Digital ID
    </button>
  ) : (
    <p>
      An injected Ethereum provider such as <a href="https://metamask.io/">MetaMask</a> is needed to
      authenticate.
    </p>
  );
};

export default ConnectButton;
