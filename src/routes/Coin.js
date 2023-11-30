import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import currenciesArray from "../assets/Currencies";

import classes from "./Coin.module.css";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [currency, setCurrency] = useState({code:'usd',symbol:'$',written:'before-currency'});
  

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const currencyChangeHandler=(e)=>
  {const matchingSymbolElement= currenciesArray.find((element)=>e.target.value.toUpperCase()===element.code);
  setCurrency({
    code:e.target.value,
    symbol:matchingSymbolElement.symbol,
  written:matchingSymbolElement.written}
  );
    }

  return (
    <div>
      <div className={classes["coin-container"]}>
        <div className={classes.content}>
          <h1>{coin.name}</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.rank}>
            <span className={classes["rank-btn"]}>
              Rank # {coin.market_cap_rank}
            </span>
          </div>
          <div className={classes.info}>
            <div className={classes["coin-heading"]}>
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? (
                <p>
                  {coin.symbol.toUpperCase()}/{currency.code.toUpperCase()}
                </p>
              ) : null}
              {coin.market_data?<select value={currency} onChange={currencyChangeHandler}>
                {Object.keys(coin.market_data.current_price).map((key) => (
                  <option key={key} value={key}>
                    {key.toUpperCase()}
                  </option>
                ))}
              </select>:null}
            </div>
            <div className={classes["coin-price"]}>
              {coin.market_data?.current_price ? (
                <h1>{currency.written==='before-currency'&&currency.symbol}{coin.market_data.current_price[currency.code].toLocaleString()}{currency.written==='after-currency'&&currency.symbol}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency[currency.code ].toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency[currency.code ].toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency[currency.code ].toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency[currency.code ].toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency[currency.code ].toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency[currency.code].toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.content}>
          <div className={classes.stats}>
            <div className={classes.left}>
              <div className={classes.row}>
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>{currency.written==='before-currency'&&currency.symbol}{coin.market_data.low_24h[currency.code].toLocaleString()}{currency.written==='after-currency'&&currency.symbol}</p>
                ) : null}
              </div>
              <div className={classes.row}>
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>{currency.written==='before-currency'&&currency.symbol}{coin.market_data.high_24h[currency.code].toLocaleString()}{currency.written==='after-currency'&&currency.symbol}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.row}>
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>{currency.written==='before-currency'&&currency.symbol}{coin.market_data.market_cap[currency.code].toLocaleString()}{currency.written==='after-currency'&&currency.symbol}</p>
                ) : null}
              </div>
              <div className={classes.row}>
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.about}>
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
