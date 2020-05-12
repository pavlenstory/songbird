import connect from "react-redux/lib/connect/connect";
import Next from "./Next";
import {setNewArray} from "../../reducers/birdReducer";


let mapStateToProps = (state) => ({
    isClickedRandomlySelectedBirdForButtonNext: state.birdPage.isClickedRandomlySelectedBirdForButtonNext,
});


const NextContainer = connect(mapStateToProps, {setNewArray})(Next);

export default NextContainer