import connect from "react-redux/lib/connect/connect";
import Character from "./Character";


let mapStateToProps = (state) => ({
    selectedBird: state.birdPage.selectedBird,
    isClickedSelectedBird: state.birdPage.isClickedSelectedBird
});


const CharacterContainer = connect(mapStateToProps, {})(Character);

export default CharacterContainer