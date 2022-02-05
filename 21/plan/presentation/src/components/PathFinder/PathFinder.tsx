import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { showPaths } from "../../functions/pathFinderFunctions";

const PathFinder = () => {
  const pathData = useSelector((state: RootState) => state.pathFinder).paths;

  return <div className="path-finder">{showPaths(pathData)}</div>;
};

export default PathFinder;
