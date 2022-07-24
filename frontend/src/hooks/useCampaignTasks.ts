import axios from "axios";
import { useSharedState } from "../lib/store";
import { useTwitterAPI } from "./useTwitterAPI";
import { useNotifications } from "./useNotifications";
import { useAsyncMemo } from "use-async-memo";

import { FakeCampaignData } from "../pages/campaign/[cid]";

export const useCampaignTasks = () => {
  const [{ campaign_id, twitter_username }] = useSharedState();
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

  const campaignTasks = useAsyncMemo(fetchTasks, [campaign_id]);
  const tasksCompleted = useAsyncMemo(checkTasksCompleted, [campaignTasks]);
  const tasksLeft = campaignTasks?.length || 0 - tasksCompleted?.length || 0;

  return { campaignTasks, tasksCompleted, tasksLeft, checkTasksCompleted };
};
