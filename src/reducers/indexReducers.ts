import { combineReducers } from "redux";
import counter from "./favoriteReducer"; // import du reducer

export const allReducers = combineReducers({
  counter,
});

export type StoreState = ReturnType<typeof allReducers>;
