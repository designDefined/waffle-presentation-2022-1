import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const DialoguePresenter = () => {
  const source = useSelector(
    (state: RootState) => state.dialogueCounter
  ).source;
  return <div className="dialogue-presenter">{source}</div>;
};

export default DialoguePresenter;
