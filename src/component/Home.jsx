import React, { useState,useEffect } from 'react'
import axios from 'axios'
import CryptoList from '../component/CryptoList'
import Loader from './Loader'
import Pagination from './Pagination'


const Home = () => {
  //fetching coin data
  const [coinsData,setcoinsData]=useState([])
  //page
  const [page,setPage]=useState(1)
  //loading
  const [loading,setLoading]=useState(true)
  //pagination
  const [currentPage,setCurrentPage]=useState(1) 
  const [postsPerPage,setPostsPerPage]=useState(21)

//fetching data from server
useEffect(() => {
    axios
      .get(`http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false&locale=en`)
      .then((res) => {
        setcoinsData(prev=>[...prev,...res.data]);
        setLoading(false)
        // console.log(res.data);
      }).catch(err=>console.log(err));
  }, [page]);

  //pagination logic
  const lastPostIndex=currentPage*postsPerPage;
  const firstPostIndex=lastPostIndex-postsPerPage;
  const currentPost=coinsData.slice(firstPostIndex,lastPostIndex)
  
  //from window we getting the data
   const handleScroll=()=>{
        // console.log("Height:",document.documentElement.scrollHeight)
        // console.log("Top:",document.documentElement.scrollTop);
        // console.log("window:",window.innerHeight)


        if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
          setLoading(true)
          setPage(prev=>prev+1)
        }
   }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div>
      <h1>Crypto</h1>
     <CryptoList coinsData={currentPost}/>
     <Pagination totalPosts={coinsData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}  setPostsPerPage={setPostsPerPage}/>
      { loading &&  <Loader/>}
    </div>
  )
}

export default Home




 // `https://api.coingecko.com/api/v3/coins/markets?limit=10&skip=${page*10-10}&vs_currency=usd&order=market_cap_desc&sparkline=false&locale=en`
 //"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en