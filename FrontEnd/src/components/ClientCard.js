import React from 'react'

function ClientCard({image,name}) {
  return (
    <div className='col-md-4'>
        <img src={image} style={{width:'100%',height:'100%'}} alt="" />
    </div>
  )
}

export default ClientCard