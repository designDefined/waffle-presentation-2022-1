import { PathDataType } from "../interface/interface";

const SET = "pathFinder/SET" as const;

export const setPathFinder = (paths: PathDataType[]) => ({
  type: SET,
  paths,
});

type PathFinderAction = ReturnType<typeof setPathFinder>;

type PathFinderState = { paths: PathDataType[] };
const initialState: PathFinderState = {
  paths: [],
};

const pathFinder = (state = initialState, action: PathFinderAction) => {
  switch (action.type) {
    case SET:
      return { paths: action.paths };
    default:
      return state;
  }
};

export default pathFinder;
