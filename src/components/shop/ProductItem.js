import React, { useEffect, useState } from "react";
import classes from "./ProductItem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/Cart-slice";
import { UIActions } from "../../store/UI-slice";

import { RiArrowDownSLine } from "react-icons/ri";

function ProductItem(props) {
  const dispatch = useDispatch();

  const cartArray = useSelector((state) => state.cart.items);

  const [size, setSize] = useState();
  const [sizeAlreadyChosen, setSizeAlreadyChosen] = useState(false);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        price: props.price,
        name: props.name,
        color: props.color,
        size: size,
      })
    );
  };

  const handleSetSize = (e) => {
    setSize(e.target.value);
    setSizeAlreadyChosen(true);
  };

  const showNotificationHandler = () => {
    dispatch(UIActions.showNotification())

    const timer = setTimeout(() => {
      dispatch(UIActions.hideNotification());
    }, 2000)
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    console.log(cartArray);
  }, [cartArray]);
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img className={classes.picture} src={props.image} alt={props.name} />
      </div>
      <div>
        <div className={classes.info}>
          <div>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.color}>{props.color}</p>
          </div>
          <p className={classes.price}>${props.price}</p>
        </div>
        <div className={classes.controls}>
          <select onChange={handleSetSize} className={classes.size}>
            <option value="5">Size</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
          <button
            disabled={!sizeAlreadyChosen}
            className={sizeAlreadyChosen ? classes.add : classes.addDisabled}
            onClick={() => {
              addToCartHandler();
              showNotificationHandler();
            }}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
