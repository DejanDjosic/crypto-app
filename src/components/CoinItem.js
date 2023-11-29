import React from 'react';
import classes from './Coins.module.css';

const CoinItem = ({coins}) => {
  return (
    <div className={classes['coin-row']}>
        <p>{coins.market_cap_rank}</p>
        <div className={classes['img-symbol']}>
            <img src={coins.image} alt=''/>
            <p>{coins.symbol.toUpperCase()}</p>
        </div>
        <p>${coins.current_price.toLocaleString()}</p>
        <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className={classes.hidemobile}>${coins.total_volume}</p>
        <p className={classes.hidemobile}>${coins.market_cap.toLocaleString()}</p>

    </div>
  )
}

export default CoinItem