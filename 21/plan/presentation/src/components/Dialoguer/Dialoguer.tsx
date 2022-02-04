import DialoguePresenter from "./DialoguePresenter";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { interpretDialogueData } from "../../functions/dialogueFunctions";

const Dialoguer = () => {
  const option = useSelector((state: RootState) => state.dialogue).option;

  option.data
    .reduce((accumulatorPromise, nextData) => {
      return accumulatorPromise.then(() => {
        return interpretDialogueData(nextData);
      });
    }, interpretDialogueData(0))
    .then(() => {
      option.callback();
    });

  return (
    <div className="dialoguer">
      <DialoguePresenter />
    </div>
  );
};

export default Dialoguer;
