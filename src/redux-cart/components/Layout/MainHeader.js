import React from "react";
import CartButton from '../Cart/CartButton';
import styles from './MainHeader.module.css';
import {useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";

const MainHeader = () => {


  return (
    <header className={styles.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
