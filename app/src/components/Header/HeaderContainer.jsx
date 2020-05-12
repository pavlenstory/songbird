import connect from "react-redux/lib/connect/connect";
import Header from "./Header";


let mapStateToProps = (state) => ({
    score: state.birdPage.score,
});



const HeaderContainer = connect(mapStateToProps, {})(Header);

export default HeaderContainer