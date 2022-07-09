export type network = {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: [string];
  blockExplorerUrls: [string];
};

const networks: { [chain_id: number]: network } = {
  137: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
};

export default networks;
