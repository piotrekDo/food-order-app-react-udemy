import React from 'react';

import meal from '../assets/meals.jpg'
import classes from './Header.module.css'

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Fake Restaurant</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={meal} alt='niestety'/>
      </div>
    </>
  );
}
