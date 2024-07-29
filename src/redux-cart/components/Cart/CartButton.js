import React from "react";
import styles from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";
import cartSlice from "../../store/cart-slice";

const CartButton = () => {

    const dispatch = useDispatch();

    const cartSlice = useSelector(state => state.cart.totalQuantity);

    const toggleCartHandler = e => {
        dispatch(uiActions.toggle());
    };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{cartSlice}</span>
    </button>
  );
};

export default CartButton;
