import { TxLinkComponent } from "../components/Toast";
import { useSharedState } from "../lib/store";
import networks from "../lib/networks";
import actions from "../lib/actions";

const DEFAULT_NOTIFICATION_TIMEOUT = 6000;
const MAX_NOTIFICATION_NUMBER = 5;

export const useNotifications = () => {
  const [{ notifications, chain_id }, dispatch] = useSharedState();

  const addNotification = (type: string, title: string, message: string) => {
    const id = `${Math.random().toString()}-${Date.now()}`;
    const notification = { id, type, title, message };
    dispatch({ type: actions.ADD_NOTIFICATION, payload: { notification } });
    return id;
  };

  const updateNotification = (
    id: string,
    type: string,
    title: string,
    message: string
  ) => {
    const notification = { id, type, title, message };
    dispatch({ type: actions.UPDATE_NOTIFICATION, payload: { notification } });
    return id;
  };

  const removeNotification = (id: string) => {
    dispatch({ type: actions.REMOVE_NOTIFICATION, payload: { id } });
  };

  const notify = (
    type: string = "warning",
    title: string = "Warning",
    message: any = "",
    duration: number = DEFAULT_NOTIFICATION_TIMEOUT
  ) => {
    if (notifications?.length > MAX_NOTIFICATION_NUMBER) return null;
    const id = addNotification(type, title, message);
    setTimeout(() => removeNotification(id), duration);
  };

  const notifyLoadingAsyncTx = async (tx: any, title: string) => {
    const id = `${Math.random().toString()}-${Date.now()}`;
    const type = "loading";
    const notification = { id, type, title };
    var success = false;

    dispatch({ type: actions.ADD_NOTIFICATION, payload: { notification } });

    tx.wait()
      .then((data: any) => {
        dispatch({
          type: actions.REMOVE_NOTIFICATION,
          payload: { id: notification.id },
        });
        notify("success", "Transaction confirmed.", ViewTxLink(data));
        success = true;
      })
      .catch((data: any) => {
        dispatch({
          type: actions.REMOVE_NOTIFICATION,
          payload: { id: notification.id },
        });
        notify("error", "Transaction failed.", ViewTxLink(data));
        success = false;
      });

    return success;
  };

  const setWalletActionRequired = (loading_state: boolean) => {
    dispatch({ type: actions.LOADING_STATE, payload: { loading_state } });
  };

  const ViewTxLink = (data: any) => {
    try {
      const { transactionHash } = data;
      const url =
        networks[chain_id].blockExplorerUrls[0] + "tx/" + transactionHash;
      return TxLinkComponent(url);
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  return {
    notify,
    notifyLoadingAsyncTx,
    setWalletActionRequired,
    addNotification,
    updateNotification,
    removeNotification,
  };
};
