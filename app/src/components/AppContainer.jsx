import connect from "react-redux/lib/connect/connect";
import App from "./App";


let mapStateToProps = (state) => ({
    countForArray: state.birdPage.countForArray,
    score: state.birdPage.score,
});


const AppContainer = connect(mapStateToProps)(App);

export default AppContainer