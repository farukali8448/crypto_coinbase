import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch]=useState('')
    console.log(search)
  return (
    <>
     <div>
     <h1 className="text-center  p-4">Crypto Application</h1>
      <form>
        <div>
            <input type="text"placeholder='Search here......'  onChange={(e)=>{setSearch(e.target.value)}} />
        </div>
      </form>
     </div>
    </>
  )
}

export default Search