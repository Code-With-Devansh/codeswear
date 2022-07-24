import React from 'react'
import Products from '../components/Products'

const stickers = () => {
  let prods = [];
  for (let index = 0; index < 8; index++) {
    prods.push({index, title:'T-Shirts', desc:'Wear the code', price:"₹599",imgLink:"https://m.media-amazon.com/images/I/A1B3JXT3oBL._SL1500_.jpg"});
  }
  return (
    <div>
      <Products Products={prods}/>
    </div>
  )
}

export default stickers