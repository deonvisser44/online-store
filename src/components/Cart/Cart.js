import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/Cart-slice";
import { UIActions } from "../../store/UI-slice";

function Cart() {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const delivery = useSelector((state) => state.cart.delivery);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const hideCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  const hideFilterHandler = () => {
    dispatch(UIActions.toggleFilterFalse());
  };

  let content = null;

  if (cartArray.length === 0) {
    content = (
      <>
        <p className={classes.emptyMessageHead}>Your cart is empty.</p>
        <p className={classes.emptyMessage}>
          To add items, select your size and click the add button.
        </p>
      </>
    );
  } else {
    content = (
      <>
        <h2>Cart</h2>
        <div className={classes.cartList}>
          {cartArray.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              size={item.size}
            />
          ))}
        </div>

        <h2>Summary</h2>
        <div className={classes.summary}>
          <div className={classes.summaryRow}>
            <p className={classes.sumItem}>Subtotal:</p>
            <p className={classes.sumItemAmount}>${subtotal}</p>
          </div>
          <div className={classes.summaryRow}>
            <p className={classes.sumItem}>Shipping:</p>
            <p className={classes.sumItemAmount}>${delivery}</p>
          </div>
          <div className={classes.line} />
          <div className={classes.summaryRow}>
            <p className={classes.sumItem}>Total:</p>
            <p className={classes.sumItemAmount}>${totalPrice}</p>
          </div>
        </div>
        <Link to="/order">
          <button
            onClick={() => {
              hideCartHandler();
              hideFilterHandler();
            }}
            className={classes.continueButton}
          >
            Continue
          </button>
        </Link>
      </>
    );
  }

  return (
    <div className={classes.cart}>
      {content}
    </div>
  );
}

export default Cart;
