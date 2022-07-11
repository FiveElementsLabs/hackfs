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
  80001: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://mumbai.polygon-rpc.com"],
    blockExplorerUrls: ["https://mumbaiscan.com/"],
  },
};

export default networks;
