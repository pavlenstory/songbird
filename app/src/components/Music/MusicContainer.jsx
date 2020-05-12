import connect from "react-redux/lib/connect/connect";
import Music from "./Music";



let mapStateToProps = (state) => ({
    randomlySelectedBird: state.birdPage.randomlySelectedBird,
    isClickedRandomlySelectedBird: state.birdPage.isClickedRandomlySelectedBird,
});


const MusicContainer = connect(mapStateToProps, {})(Music);

export default MusicContainer