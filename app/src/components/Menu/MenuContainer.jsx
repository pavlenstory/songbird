import connect from "react-redux/lib/connect/connect";
import Menu from "./Menu";


let mapStateToProps = (state) => ({
        typesBirds: state.birdPage.typesBirds
});


const MenuContainer = connect(mapStateToProps, {})(Menu);

export default MenuContainer