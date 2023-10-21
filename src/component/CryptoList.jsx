import React, { useState } from "react";
import CryptoCard from "./CryptoCard";
import "../style/cryptolist.css";

const CryptoList = ({ coinsData }) => {
  //search functinality
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
      <form className="p-3">
        <div className="me-3 w-75">
          <input
            type="text"
            class="form-control"
            placeholder="Search here"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      </div>
       
      <div className="crypto_list">
        {coinsData
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((coin, index) => {
            return (
              <div key={index}>
                <CryptoCard
                  image={coin.image}
                  name={coin.name}
                  price={coin.current_price}
                  rank={coin.market_cap_rank}
                  setSearch={setSearch}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CryptoList;
