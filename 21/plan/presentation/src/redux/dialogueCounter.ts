const ADD = "dialogueCounter/ADD" as const;
const SET = "dialogueCounter/SET" as const;
const RESET = "dialogueCounter/RESET" as const;

export const addLetter = (letter: string) => ({
  type: ADD,
  letter,
});

export const setLetter = (letter: string) => ({
  type: SET,
  letter,
});

export const resetLetter = () => ({
  type: RESET,
});

type DialogueCounterAction =
  | ReturnType<typeof addLetter>
  | ReturnType<typeof setLetter>
  | ReturnType<typeof resetLetter>;

type DialogueCounterState = { source: string };

const initialState: DialogueCounterState = {
  source: "",
};

const dialogueCounter = (
  state: DialogueCounterState = initialState,
  action: DialogueCounterAction
) => {
  switch (action.type) {
    case ADD:
      return { source: `${state.source}${action.letter}` };
    case SET:
      return { source: action.letter };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default dialogueCounter;
