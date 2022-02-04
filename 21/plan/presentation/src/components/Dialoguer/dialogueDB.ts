import { DialoguerOptionType } from "../../interface/interface";
import store from "../../redux/store";
import { setDialogueByIndex } from "../../redux/dialogue";
import { resetLetter } from "../../redux/dialogueCounter";
import { batch } from "react-redux";

const fast = 100;
const normal = 150;
const slow = 200;

export const dialogueDB: DialoguerOptionType[] = [
  {
    data: [
      { script: ". . . ", speed: 500 },
      1000,
      { script: "거기 누구 있어요?", speed: fast },
    ],
    callback: () => {
      setTimeout(() => {
        batch(() => {
          store.dispatch(resetLetter());
          store.dispatch(setDialogueByIndex(1));
        });
      }, 3000);
    },
  },
  {
    data: [{ script: "우리는 할 수 있을 것이다", speed: normal }],
    callback: () => {},
  },
];
