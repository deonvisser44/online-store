import React from "react";
import classes from "./CartItem.module.css";

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "../../store/Cart-slice";


function CartItem(props) {
  const dispatch = useDispatch();

  const totalItems = useSelector((state) => state.cart.totalItems)

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart({id: props.id, price: props.price}))
    console.log('CLicked', totalItems)

  }
  return (
    <div className={classes.cartItem}>
      <div>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.color}>{props.color}</p>
        <p className={classes.size}>Size: {props.size}</p>

        <button className={classes.removeButton} onClick={removeItemHandler}>Remove</button>
      </div>
      <p className={classes.price}>${props.price}</p>
    </div>
  );
}

export default CartItem;
