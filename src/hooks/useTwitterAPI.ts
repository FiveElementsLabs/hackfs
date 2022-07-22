import { useMemo } from "react";
import axios from "axios";
import { useSharedState } from "../lib/store";

export const useTwitterAPI = () => {
  const [{ twitter_username, twitter_verified }] = useSharedState();

  const verifiedUser = useMemo(
    () => (twitter_username && twitter_verified ? twitter_username : null),
    [twitter_username, twitter_verified]
  );

  const bearerToken = process.env.NEXT_PUBLIC_TWITTER_TOKEN;
  if (!bearerToken) throw new Error("please provide a twitter api key");

  const makeQuery = async (endpoint: string, tweet_id: string, next_token: string) => {
    const opt: any = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
      params: {
        query: `conversation_id:${tweet_id}`,
        max_results: 100,
      },
    };

    if (next_token) opt.params.next_token = next_token;
    return await axios.get(endpoint, opt);
  };

  const checkTweetLiked = () => {};

  const checkTweetRetweeted = () => {};

  const checkTweetCommented = () => {};

  const checkAccountFollowed = () => {};
};
