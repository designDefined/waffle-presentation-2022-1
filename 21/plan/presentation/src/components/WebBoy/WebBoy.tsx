import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const WebBoy = () => {
  const status = useSelector((state: RootState) => state.webBoyStatus);

  return (
    <div className={`web-boy move-${status.move} color-${status.color}`} />
  );
};
export default WebBoy;
