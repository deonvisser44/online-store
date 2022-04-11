import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/Cart-slice";

import { RiShoppingCartLine } from "react-icons/ri";

function Navbar() {
  const dispatch = useDispatch();

  const location = useLocation();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const totalItems = useSelector((state) => state.cart.totalItems);

  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <header className={classes.header}>
      <Link to='/'>
      <h1>SNKRS.</h1>
      </Link>
      <div className={classes.nav}>
        <Link to="/">
          <p className={url === "/" ? classes.liActive : classes.li}>All</p>
        </Link>
        <Link to="/men">
          <p className={url === "/men" ? classes.liActive : classes.li}>Men</p>
        </Link>
        <Link to="/women">
          <p className={url === "/women" ? classes.liActive : classes.li}>
            Women
          </p>
        </Link>

        <p className={classes.liCart} onClick={toggleCart}>
          <RiShoppingCartLine />
          <span className={classes.totalItems}>{totalItems}</span>
        </p>
      </div>
    </header>
  );
}

export default Navbar;
