import React from 'react'
import "../style/cryptocard.css"

const CryptoCard = ({image,name,price,rank}) => {
  return (
    <div>
    <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h3 className="card-title"><span>Rank : </span>{rank}</h3>
    <h3 className="card-text"><span>Name : </span>{name}</h3>
    <h3 className="card-text"><span>Price : </span>{price}</h3>
    {/* <h3 className="card-text"><span>Supply : </span>{max_supply}</h3>
    <h3 className="card-title"><span>MCap : </span>{market_cap}</h3> */}

    
  </div>
</div>
         {/* <div className='card_image'>
            <img src={image} alt={name} />
         </div>
         <div className='card_info'>
                 <h2 className='text-primary'>Rank : {rank}</h2>
                 <h2 className='text-success'><span className='text-danger'>Name : </span>{name}</h2>
                 <h2 className='text-success'><span className='text-danger'>Price : </span>${price}</h2>
         </div> */}
    </div>
  )
}

export default CryptoCard