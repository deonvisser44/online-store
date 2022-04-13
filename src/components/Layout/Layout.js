import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Cart from "../Cart/Cart";
import Notification from "../UI/Notification";
import BrandFilter from "../UI/BrandFilter";

import classes from './Layout.module.css';

import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/Cart-slice";

function Layout(props) {
  const dispatch = useDispatch();
  const cartVisible = useSelector((state) => state.cart.cartVisible);
  const showNotification = useSelector((state) => state.UI.showNotification);

  const closeCart = () => {
    if (cartVisible) {
      dispatch(cartActions.toggleCart());
    } else {
      return;
    }
  };

  const location = useLocation();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <Fragment>
      <Navbar />
      {url !== '/order' && url !== '/confirmed' && <BrandFilter />}
      {showNotification && !cartVisible && <Notification />}
      {cartVisible && <Cart />}
      <main
        onClick={() => {
          closeCart();
        }}
      >
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;
