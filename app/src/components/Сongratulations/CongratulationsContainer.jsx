import connect from "react-redux/lib/connect/connect";
import Congratulations from "./Congratulations";
import {setFirstArray} from "../../reducers/birdReducer";


let mapStateToProps = (state) => ({
    score: state.birdPage.score
});


const CongratulationsContainer = connect(mapStateToProps, {setFirstArray})(Congratulations);

export default CongratulationsContainer
