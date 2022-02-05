import { PathDataType } from "../interface/interface";
import store from "../redux/store";
import { setPathFinder } from "../redux/pathFinder";
export const showPaths = (pathData: PathDataType[]) => {
  return (
    <>
      {pathData.map((path) => {
        return (
          <div
            key={path.index}
            className={`path-item ${path.style}`}
            onClick={() => {
              path.callback();
              store.dispatch(setPathFinder([]));
            }}
          >
            {path.label}
          </div>
        );
      })}
    </>
  );
};
