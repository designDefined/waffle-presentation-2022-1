import { DialoguerOptionType } from "../interface/interface";
import { dialogueDB } from "../components/Dialoguer/dialogueDB";

const SET = "dialogue/SET" as const;

export const setDialogueByIndex = (index: number) => ({
  type: SET,
  index,
});

type DialogueAction = ReturnType<typeof setDialogueByIndex>;

type DialogueState = { option: DialoguerOptionType };
const initialState: DialogueState = {
  option: dialogueDB[0],
};

const dialogue = (
  state: DialogueState = initialState,
  action: DialogueAction
) => {
  switch (action.type) {
    case SET:
      return { option: dialogueDB[action.index] };
    default:
      return state;
  }
};

export default dialogue;
