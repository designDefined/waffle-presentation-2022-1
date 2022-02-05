import { combineReducers } from "@reduxjs/toolkit";
import dialogueCounter from "./dialogueCounter";
import dialogue from "./dialogue";
import pathFinder from "./pathFinder";
import webBoyStatus from "./webBoyStatus";

const rootReducer = combineReducers({
  dialogueCounter,
  dialogue,
  pathFinder,
  webBoyStatus,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
