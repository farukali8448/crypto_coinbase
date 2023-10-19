import React, { useState, useEffect } from "react";
import axios from "axios";
// import Pagination from "./Pagination";

const Home = () => {
  //coin accessing 
  const [coins, setCoins] = useState([]);
  //searching coin
  const [search,setSearch]=useState('')

  

 useEffect(() => {
    axios
      .get(
        // `https://api.coingecko.com/api/v3/coins/markets?limit=10&skip=${page*10-10}&vs_currency=usd&order=market_cap_desc&sparkline=false&locale=en`
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
      <form>
        <div className="mb-3 me-5">
            <input type="text"placeholder='Search here......' className="p-2 w-75 bg-info rounded text-danger" onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
      </form>

      <div className="d-flex justify-content-center gap-4 flex-wrap text-center ">
        {coins.filter((item)=>{
          return search.toLowerCase()===''?item:item.name.toLowerCase().includes(search)
        }).map((coin) => {
          return (
            <div className="border rounded-6 border-none" key={coin.id}>
              <div className="card border" style={{ width: "16rem", height:"18rem"}}> 
                <div className="card-body p-5">
                  <h5 className="card-title">{coin.name.toUpperCase()}</h5>
                  <h4 className="card-text">{coin.symbol}</h4>
                  <h4 className="card-price text-success">$ {coin.current_price}</h4>
                  <img src={coin.image} alt="img" className="card-img-top  w-50 h-50 pt-4"/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
       {/* <Pagination data={coins}/> */}
     
    </div>
  );
};

export default Home;


 // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/markets?limit=10&skip=${page*10-10}&vs_currency=usd&order=market_cap_desc&sparkline=false&locale=en`
  //       // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en"
  //     )
  //     .then((res) => {
  //       setCoins(res.data);
  //       console.log(res.data);
  //     }, []);
  // });
