import axios from "axios";
import { ethers } from "ethers";
import { useSharedState } from "../lib/store";
import { useTwitterAPI } from "./useTwitterAPI";
import { useNotifications } from "./useNotifications";
import { useAsyncMemo } from "use-async-memo";
import RewardModuleJson from "../../../backend/artifacts/contracts/mocks/MockRewardAction.sol/MockRewardAction.json";
import { FakeCampaignData } from "../pages/campaign/[cid]";

export const useCampaignTasks = () => {
  const [{ campaign_id, twitter_username, provider }] = useSharedState();
  const { notify } = useNotifications();
  const { checkTweetLiked, checkTweetRetweeted, checkTweetCommented } =
    useTwitterAPI();

  const fetchTasks = async (): Promise<any> => {
    // if (!campaign_id) return null;
    // const res = await axios.get(`/api/campaigns/${campaign_id}/tasks`);
    // const tasks = await res.data.json();

    const tasks = FakeCampaignData.tasks;
    return tasks;
  };

  const checkTasksCompleted = async (): Promise<any> => {
    if (!campaign_id || !campaignTasks?.length) return null;
    if (!twitter_username) {
      notify("warning", "No twitter account connected");
      return null;
    }

    console.log("checking tasks");
    notify("info", "Checking tasks...");

    const completedTasks = [];
    for (const task of campaignTasks) {
      if (task.name === "twitter") {
        for (const subtask of task?.subtasks) {
          // For now, use just one mocked subtask
          // if (subtask.type === "like+retweet") ...
          // if (!subtask?.tweet_id) continue;
          // + more checks

          // Demo data
          const tweet_id = "1522592186499571712";
          const liked = await checkTweetLiked(tweet_id);
          if (liked) completedTasks.push(subtask);
        }
      }
    }
  };

  const checkAndClaim = async (): Promise<any> => {
    console.log(provider.getSigner());
    const RewardModule = new ethers.Contract(
      "0x086b62DF85345A19EA17aE57947fcd0B8E04D6C1",
      RewardModuleJson.abi,
      provider.getSigner()
    );

    const tx = await RewardModule.claim({ gasLimit: 5000000 });
    const wait = await tx.wait();
    console.log(wait);
  };

  const campaignTasks = useAsyncMemo(fetchTasks, [campaign_id]);
  const tasksCompleted = useAsyncMemo(checkTasksCompleted, [campaignTasks]);
  const tasksLeft = campaignTasks?.length || 0 - tasksCompleted?.length || 0;

  return {
    campaignTasks,
    tasksCompleted,
    tasksLeft,
    checkTasksCompleted,
    checkAndClaim,
  };
};
