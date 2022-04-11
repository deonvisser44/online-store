import React, { useEffect, useState } from "react";
import classes from "./BrandFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../../store/UI-slice";

function BrandFilter() {
  const dispatch = useDispatch();

  const currentBrand = useSelector((state) => state.UI.brandToFilter);

  const changeFilterBrandHandler = (name) => {
    dispatch(UIActions.setBrandToFilterBy(name));
  };

  const [allClass, setAllClass] = useState(classes.li);
  const [adidasClass, setAdidasClass] = useState(classes.li);
  const [nikeClass, setNikeClass] = useState(classes.li);
  const [jordanClass, setJordanClass] = useState(classes.li);
  const [newBalanceClass, setNewBalanceClass] = useState(classes.li);


  useEffect(() => {
      if(currentBrand === 'all'){
          setAllClass(classes.liSelected)
      } else {
          setAllClass(classes.li)
      }
      if(currentBrand === 'adidas'){
        setAdidasClass(classes.liSelected)
    } else {
        setAdidasClass(classes.li)
    }
    if(currentBrand === 'nike'){
        setNikeClass(classes.liSelected)
    } else {
        setNikeClass(classes.li)
    }
    if(currentBrand === 'jordan'){
        setJordanClass(classes.liSelected)
    } else {
        setJordanClass(classes.li)
    }
    if(currentBrand === 'newbalance'){
        setNewBalanceClass(classes.liSelected)
    } else {
        setNewBalanceClass(classes.li)
    }
  }, [currentBrand])

  return (
    <div className={classes.filter}>
      <p>Shop by brand:</p>
      <ul>
        <li
          className={allClass}
          onClick={() => {
            changeFilterBrandHandler("all");
          }}
        >
          All brands
        </li>
        <li
          className={adidasClass}
          onClick={() => {
            changeFilterBrandHandler("adidas");
          }}
        >
          Adidas
        </li>
        <li
          className={nikeClass}
          onClick={() => {
            changeFilterBrandHandler("nike");
          }}
        >
          Nike
        </li>
        <li
          className={jordanClass}
          onClick={() => {
            changeFilterBrandHandler("jordan");
          }}
        >
          Air Jordan
        </li>
        <li
          className={newBalanceClass}
          onClick={() => {
            changeFilterBrandHandler("newbalance");
          }}
        >
          New Balance
        </li>
      </ul>
    </div>
  );
}

export default BrandFilter;
