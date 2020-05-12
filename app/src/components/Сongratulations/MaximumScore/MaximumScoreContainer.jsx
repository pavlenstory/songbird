import connect from "react-redux/lib/connect/connect";
import MaximumScore from "./MaximumScore";
import {setFirstArray} from "../../../reducers/birdReducer";




let mapStateToProps = (state) => ({
    score: state.birdPage.score
});


const MaximumScoreContainer = connect(mapStateToProps, {setFirstArray})(MaximumScore);

export default MaximumScoreContainer
