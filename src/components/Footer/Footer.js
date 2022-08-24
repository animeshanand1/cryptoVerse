import React from 'react'

function Footer() {
    let date=new Date()
  return (
    <div>
        <h4 style={{color:'white',textAlign:'center'}}>Copyright <span style={{color:'red',fontWeight:'600'}}>{date.getFullYear()}</span></h4>
    </div>
  )
}

export default Footer