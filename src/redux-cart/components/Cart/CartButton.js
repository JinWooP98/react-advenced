import React from "react";
import styles from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {uiActions} from "../../store/ui-slice";

const CartButton = () => {

    const dispatch = useDispatch();

    const toggleCartHandler = e => {
        dispatch(uiActions.toggle());
    };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default CartButton;
