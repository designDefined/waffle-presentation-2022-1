import { DialoguerDataType } from "../interface/interface";
import store from "../redux/store";
import { addLetter, setLetter } from "../redux/dialogueCounter";

export const interpretDialogueData = (data: DialoguerDataType) => {
  if (Number.isInteger(data)) {
    //숫자일 때
    const delay = data as number;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, delay);
    });
  } else {
    //{script, speed}일 때
    const dataObject = data as { script: string; speed: number };
    const leng = dataObject.script.length;
    return new Promise((resolve) => {
      let index = 0;
      setInterval(() => {
        if (index < leng) {
          store.dispatch(addLetter(dataObject.script[index]));
          index++;
        } else {
          clearInterval();
          resolve(null);
        }
      }, dataObject.speed);
    });
  }
};
