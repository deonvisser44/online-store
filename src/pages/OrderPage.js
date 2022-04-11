import React, { useState, useEffect } from "react";
import classes from "./OrderPage.module.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import { cartActions } from "../store/Cart-slice";

function OrderPage() {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart.items);

  const subtotal = useSelector((state) => state.cart.subtotal);
  const delivery = useSelector((state) => state.cart.delivery);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");

  const [countryClass, setCountryClass] = useState(classes.validInput);
  const [cityClass, setCityClass] = useState(classes.validInput);
  const [streetClass, setStreetClass] = useState(classes.validInput);
  const [postalCodeClass, setPostalCodeClass] = useState(classes.validInput);

  const [cardNameClass, setCardNameClass] = useState(classes.validInput);
  const [cardNumberClass, setCardNumberClass] = useState(classes.validInput);
  const [cvcClass, setCvcClass] = useState(classes.validInput);
  const [emailClass, setEmailClass] = useState(classes.validInput);

  const [confirmEnabled, setConfirmEnabled] = useState(false);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  const checkValidity = (e, updateFunction) => {
    if (e.target.value === "") {
      updateFunction(classes.invalidInput);
    } else {
      updateFunction(classes.validInput);
    }
  };

  useEffect(() => {
    if (
      country !== "" &&
      city !== "" &&
      street !== "" &&
      postalCode !== "" &&
      cardName !== "" &&
      cardNumber !== "" &&
      cvc !== "" &&
      email !== ""
    ) {
      setConfirmEnabled(true);
      console.log("country changed");
    }
  }, [country, city, street, postalCode, cardName, cardNumber, cvc, email]);

  return (
    <div className={classes.orderPage}>
      <div className={classes.info}>
        <div className={classes.infoContainer}>
          <h2>Address</h2>
          <div className={classes.formRow}>
            <div className={classes.formUnit}>
              <label>Country</label>
              <input
                type="text"
                className={countryClass}
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  console.log(country);
                }}
                onBlur={(e) => {
                  checkValidity(e, setCountryClass);
                }}
              />
            </div>
            <div className={classes.formUnit}>
              <label>City</label>
              <input
                type="text"
                className={cityClass}
                onChange={(e) => setCity(e.target.value)}
                onBlur={(e) => {
                  checkValidity(e, setCityClass);
                }}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={classes.formUnit}>
              <label>Street</label>
              <input
                type="text"
                className={streetClass}
                onChange={(e) => setStreet(e.target.value)}
                onBlur={(e) => {
                  checkValidity(e, setStreetClass);
                }}
              />
            </div>
            <div className={classes.formUnit}>
              <label>Postal Code</label>
              <input
                type="text"
                className={postalCodeClass}
                onChange={(e) => setPostalCode(e.target.value)}
                onBlur={(e) => {
                  checkValidity(e, setPostalCodeClass);
                }}
              />
            </div>
          </div>
          <h2>Billing Info</h2>
          <div className={classes.formRow}>
            <div className={classes.formUnit}>
              <label>Name on card</label>
              <input
                type="text"
                className={cardNameClass}
                onChange={(e) => setCardName(e.target.value)}
                onBlur={(e) => {
                  checkValidity(e, setCardNameClass);
                }}
              />
            </div>
            <div className={classes.formUnit}>
              <label>Card number</label>
              <input
                type="text"
                className={cardNumberClass}
                onChange={(e) => setCardNumber(e.target.value)}
                onBlur={(e) => {
                  checkValidity(e, setCardNumberClass);
                }}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={classes.formUnit}>
              <label>CVC</label>
              <input
                type="text"
                className={cvcClass}
                onChange={(e) => setCvc(e.target.value)}
                onBlur={(e) => {
                  checkValidity(e, setCvcClass);
                }}
              />
            </div>
            <div className={classes.formUnit}>
              <label>Email</label>
              <input
                type="text"
                className={emailClass}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => {
                  checkValidity(e, setEmailClass);
                }}
              />
            </div>
          </div>
          <Link to="/confirmed">
            <button
              className={confirmEnabled ? classes.confirmButton : classes.confirmButtonDisabled}
              onClick={clearCartHandler}
              disabled={!confirmEnabled}
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>

      <div className={classes.cart}>
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
            <p className={classes.sumItemAmount}>S{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
