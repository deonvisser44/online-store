import React from 'react'
import classes from './ConfirmationPage.module.css';
import greentick from '../assets/greentick.png';

function ConfirmationPage() {
  return (
    <div className={classes.confirmation}>
        <img src={greentick} alt="shopping bag" />
        <h1>Thank You!</h1>
        <h3>A confirmation email will be sent with your tracking details.</h3>
    </div>
  )
}

export default ConfirmationPage