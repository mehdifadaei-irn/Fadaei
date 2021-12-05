import "./topbar.scss";
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import {opposite} from '../../features/boolSlice';
import {useDispatch, useSelector} from "react-redux";


function TopBar(props) {

    const freeBool = useSelector(state => state.bool.myBool);
    const dispatch = useDispatch();

    return (
        <div className={`topbar ${freeBool && "active"}`} id={'topbar'}>
            <div className={'wrapper'}>
                <div className="left">
                    <a href="#intro" className={'logo'}>Genius</a>
                    <div className="itemContainer">
                        <PersonIcon className={'icon'}/>
                        <span>+98 921 0139 123</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className={'icon'}/>
                        <span>m_mehdi_000@yahoo.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> dispatch(opposite(!freeBool))}>
                        <span className={'line1'}/>
                        <span className={'line2'}/>
                        <span className={'line3'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;

