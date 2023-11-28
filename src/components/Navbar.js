import React from 'react';
import {FaCoins} from 'react-icons/fa';
import classes from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={classes.navbar}>
        <FaCoins className={classes.icon}/>
        <h1>Coin <span className={classes.purple}>Search </span></h1>
    </div>
  )
}

export default Navbar