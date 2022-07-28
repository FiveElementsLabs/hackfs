import { useSharedState } from "../lib/store";

export const useTwitterAPI = () => {
  const [{ twitter_username }] = useSharedState();

  const makeQuery = async (
    endpoint: string,
    next_token: string | null = null
  ) => {
    const opt: any = {
      method: "post",
      body: JSON.stringify({
        query: endpoint,
        params: { next_token },
      }),
    };

    const res = await fetch("/api/queryTwitter", opt);
    return await res.json();
  };

  const checkTweetLiked = async (tweetId: string) => {
    const endpoint = `https://api.twitter.com/2/tweets/${tweetId}/liking_users?user.fields=username`;
    const result = await makeQuery(endpoint);
    const likers = result?.data?.data;
    const liked = likers?.some(
      (liker: any) => liker.username === twitter_username
    );
    return liked;
  };

  const checkTweetRetweeted = async () => {};

  const checkTweetCommented = async () => {};

  const checkAccountFollowed = async () => {};

  return {
    makeQuery,
    checkTweetLiked,
    checkTweetRetweeted,
    checkTweetCommented,
    checkAccountFollowed,
  };
};
