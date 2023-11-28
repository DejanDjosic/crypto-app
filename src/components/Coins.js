import React from "react";
import CoinItem from "./CoinItem";
import classes from './Coins.module.css';

const Coins = ({ coins }) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>#</p>
        <p className={classes['coin-name']}>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className={classes.hidemobile}>Volume</p>
        <p className={classes.hidemobile}>Mkt Cap</p>
      </div>
      {coins.map(coins=>{
        return(<CoinItem key={coins.id} coins={coins}/>)
      })}
    </div>
  );
};

export default Coins;
