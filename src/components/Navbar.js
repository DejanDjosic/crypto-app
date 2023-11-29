import React from "react";
import { FaCoins } from "react-icons/fa";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Link className={classes['td-none']} to="/">
      <div className={classes.navbar}>
        <FaCoins className={classes.icon} />
        <h1>
          Coin <span className={classes.purple}>Search </span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
