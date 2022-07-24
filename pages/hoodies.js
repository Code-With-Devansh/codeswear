import React from 'react'
import Products from '../components/Products'

const hoodies = () => {
  let prods = [];
  for (let index = 0; index < 8; index++) {
    prods.push({index, title:'Hoodies', desc:'Wear the code', price:"₹599", size:['S','M','L','Xl', 'XXl'], imgLink:"https://m.media-amazon.com/images/I/41U4wiSU+XL.jpg"});
  }
  return (
    <div>
      <Products Products={prods}/>
    </div>
  )
}

export default hoodies