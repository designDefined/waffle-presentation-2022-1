import { combineReducers } from "@reduxjs/toolkit";
import dialogueCounter from "./dialogueCounter";
import dialogue from "./dialogue";

const rootReducer = combineReducers({
  dialogueCounter,
  dialogue,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
