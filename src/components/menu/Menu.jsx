import "./menu.scss";
import {useDispatch, useSelector} from "react-redux";
import {opposite} from "../../features/boolSlice";

function Menu() {
    const freeBool = useSelector(state => state.bool.myBool);
    const dispatch = useDispatch();

    const closeMenu = ()=>{
        dispatch(opposite(false));
    }

    return (
        <div className={'menu ' + (freeBool && 'active')}>
            <ul>
                <li onClick={closeMenu}>
                    <a href="#intro">Home</a>
                </li><li onClick={closeMenu}>
                    <a href="#portfolio">Portfolio</a>
                </li><li onClick={closeMenu}>
                    <a href="#works">Works</a>
                </li><li onClick={closeMenu}>
                    <a href="#testma">Testmonials</a>
                </li><li onClick={closeMenu}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;