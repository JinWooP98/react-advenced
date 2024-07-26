import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/AuthSlice";

const Header = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const logOutHandler = e => {

        dispatch(authActions.logOut());
    }

    return (

        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isLoggedIn &&
            <nav>
                <ul>
                    <li>
                        <a href='/public'>My Products</a>
                    </li>
                    <li>
                        <a href='/public'>My Sales</a>
                    </li>
                    <li>
                        <button onClick={logOutHandler}>Logout</button>
                    </li>
                </ul>
            </nav>
            }
        </header>
    );
};

export default Header;