import React from 'react'
import classes from './Banner.module.css';
import bannergif from '../../assets/banner3.png'

function Banner() {
  return (
    <div className={classes.banner}>
      <img src={bannergif} alt="banner" />
    </div>
  )
}

export default Banner