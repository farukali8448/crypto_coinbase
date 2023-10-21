import React from 'react'
import '../style/pagination.css'

const Pagination = ({totalPosts,postsPerPage,setCurrentPage,currentPage}) => {
  const pages=[];

  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pages.push(i)
  }
  return (
    <div className='pagination'>
          {
            pages.map((page,index)=>{
              return (
                <div key={index} className='p-2'>
                <button onClick={()=>setCurrentPage(page)} className={page===currentPage?'active':''}>{page}</button>
                </div>
              )

            })
          }

      </div>
  )
}

export default Pagination