import { create } from "ipfs-http-client";

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

export const uploadIpfs = async (jsonObj: object) => {
  const result = await client.add(
    JSON.stringify({...jsonObj})
  );

  return result;
};

export const getIpfs = async (URI: string) => {
  const result = await client.get(URI);
  return result;
};
