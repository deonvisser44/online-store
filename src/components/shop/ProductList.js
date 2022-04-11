import React from 'react'
import classes from './ProductList.module.css';



function ProductList(props) {
  return (
    <div className={classes.list}>
        {props.children}
    </div>
  )
}

export default ProductList