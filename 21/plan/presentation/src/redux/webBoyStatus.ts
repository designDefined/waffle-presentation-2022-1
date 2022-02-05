const MOVE = "webBoyStatus/move" as const;
const COLOR = "webBoyStatus/color" as const;

export const moveWebBoy = (payload: string) => ({
  type: MOVE,
  payload,
});

export const colorWebBoy = (payload: string) => ({
  type: COLOR,
  payload,
});

type WebBoyAction =
  | ReturnType<typeof moveWebBoy>
  | ReturnType<typeof colorWebBoy>;

type WebBoyState = { move: string; color: string };
const initialState: WebBoyState = {
  move: "appear",
  color: "",
};

const webBoyStatus = (state = initialState, action: WebBoyAction) => {
  switch (action.type) {
    case MOVE:
      return { ...state, move: action.payload };
    case COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default webBoyStatus;
