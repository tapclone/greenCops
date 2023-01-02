import React from 'react'
import './clientCard.css'
function ClientCard({image,name}) {
  return (
    <div className='col-md-4 clientCard' style={{padding:"1px"}}>
        <img src={image}  alt="" />
        <div className='cardLayer'></div>
        <p className='cardContent'>{name}</p>
    </div>
  )
}

export default ClientCard