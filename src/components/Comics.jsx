import React from 'react'
import '../styles/Comics.scss'
    
const Comics = ({ data }) => {
  console.log(data)
  return (
    <div className='comics-container'>
      { data.map(comics => ( <li>{comics?.description} sale date: {comics?.dates[0]?.date}</li> )) }
    </div>
  )
}

export default Comics