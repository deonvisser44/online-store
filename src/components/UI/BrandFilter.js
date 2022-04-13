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
      <div className={classes.filterRow}>
        <div
          className={allClass}
          onClick={() => {
            changeFilterBrandHandler("all");
          }}
        >
          <p>All brands</p>
        </div>
        <div
          className={adidasClass}
          onClick={() => {
            changeFilterBrandHandler("adidas");
          }}
        >
          <p>Adidas</p>
        </div>
        <div
          className={nikeClass}
          onClick={() => {
            changeFilterBrandHandler("nike");
          }}
        >
          <p>Nike</p>
        </div>
        <div
          className={jordanClass}
          onClick={() => {
            changeFilterBrandHandler("jordan");
          }}
        >
          <p>Air Jordan</p>
        </div>
        <div
          className={newBalanceClass}
          onClick={() => {
            changeFilterBrandHandler("newbalance");
          }}
        >
          <p>New Balance</p>
        </div>
      </div>
    </div>
  );
}

export default BrandFilter;
