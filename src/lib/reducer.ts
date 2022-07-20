import { ethers } from "ethers";
import actions from "./actions";

type action = {
  type: string;
  payload?: any;
};

type State = {
  is_connected: boolean;
  account: string | null;
  provider: ethers.providers.Provider | null;
  network_name: string | null;
  chain_id: number | string | null;
  loading: boolean;
  theme: string;
  notifications: any[];
};

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const theme = window.localStorage.getItem("theme");
    if (theme) return theme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  }
  return "light";
};

export const initialState: State = {
  is_connected: false,
  account: "",
  provider: null,
  network_name: null,
  chain_id: null,
  loading: false,
  theme: getInitialTheme(),
  notifications: [],
};

export const reducer = (state: State, action: action) => {
  switch (action.type) {
    case actions.LOGIN_WALLET:
      window.localStorage.setItem("shouldConnectMetamask", "true");
      return {
        ...state,
        is_connected: true,
        account: action.payload.account,
        provider: action.payload.provider,
        network_name: action.payload.network_name,
        chain_id: action.payload.chain_id,
      };

    case actions.LOGOUT_WALLET:
      window.localStorage.removeItem("shouldConnectMetamask");
      return {
        ...state,
        is_connected: false,
        account: "",
        provider: null,
        network_name: null,
        chain_id: null,
      };

    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case actions.SET_THEME:
      window.localStorage.setItem("theme", action.payload.theme);
      return {
        ...state,
        theme: action.payload.theme,
      };

    case actions.CHANGE_NETWORK:
      return {
        ...state,
        network_name: action.payload.network_name,
        chain_id: action.payload.chain_id,
      };

    case actions.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload.notification],
      };

    case actions.UPDATE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          if (notification.id === action.payload.notification.id)
            return action.payload.notification;
          return notification;
        }),
      };

    case actions.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
