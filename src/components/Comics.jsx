import React from 'react'
import '../styles/Comics.scss'
    
const Comics = ({ data }) => {
  const formatDate = (d) => {
    d = new Date();
    return `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
  } 
  console.log(data)
  return (
    <div className='comics-container'>
      { data.map(comics => ( <div className='comics-card'>{comics?.description} sale date: {formatDate(comics?.dates[0]?.date)}</div> )) }
    </div>
  )
}

export default Comics