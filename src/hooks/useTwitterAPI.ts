export const useTwitterAPI = () => {
  const bearerToken = process.env.NEXT_PUBLIC_TWITTER_TOKEN;
  if (!bearerToken) throw new Error("please provide a twitter api key");
};
