import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      }, []);
  });
  return (
    <div className="p-4">
      <h1 className="text-center  p-4">Crypto Application</h1>
      <div className="d-flex justify-content-center gap-4 flex-wrap text-center ">
        {coins.map((coin) => {
          return (
            <div className="border rounded-6 border-none" key={coin.id}>
              <div className="card border" style={{ width: "16rem", height:"18rem"}}> 
                <div className="card-body p-5">
                  <h5 className="card-title">{coin.name.toUpperCase()}</h5>
                  <h4 className="card-text">{coin.symbol}</h4>
                  <h4 className="card-price text-success">$ {coin.current_price}</h4>
                  <img src={coin.image} alt="..." className="card-img-top  w-50 h-50 pt-4"/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
