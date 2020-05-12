import connect from "react-redux/lib/connect/connect";
import Choice from "./Choice";
import {
    setBirdNameColor,
    setScore,
    setSelectedBird
} from "../../reducers/birdReducer";


let mapStateToProps = (state) => ({
    namesBirds: state.birdPage.namesBirds,
    randomlySelectedBird: state.birdPage.randomlySelectedBird,
    choiceTargetElement: state.birdPage.choiceTargetElement,
    choiceTargetElementClassName: state.birdPage.choiceTargetElementClassName,
    isClickedRandomlySelectedBird: state.birdPage.isClickedRandomlySelectedBird,
    choiceTargetElementId: state.birdPage.choiceTargetElementId,
    previousStateOfTheClickedElementChoiceTargetElement: state.birdPage.previousStateOfTheClickedElementChoiceTargetElement,
});


const ChoiceContainer = connect(mapStateToProps, {setSelectedBird, setBirdNameColor, setScore})(Choice);

export default ChoiceContainer