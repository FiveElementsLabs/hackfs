import { useReducer } from "react";
import { createContainer } from "react-tracked";
import { reducer, initialState } from "./reducer";

export const { Provider: SharedStateProvider, useTracked: useSharedState } = createContainer<any, any, any>(
  () => useReducer(reducer, initialState)
);
