import CoinItem from "./CoinItem";
import classes from "./Coins.module.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
const Coins = ({ coins }) => {


  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>#</p>
        <p className={classes["coin-name"]}>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className={classes.hidemobile}>Volume</p>
        <p className={classes.hidemobile}>Mkt Cap</p>
      </div>
      {coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            (<CoinItem key={coins.id} coins={coins} />)
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
