import React from 'react'
import Shopcard from './ProductCard'


function Shoplist({shopping}) {
  return (
    <div style={{display:'flex',gap:"20px"}}>
        
    {shopping.map(e=><Shopcard shop={e}/>
        )}
    </div>
  )
  }


export default Shoplist