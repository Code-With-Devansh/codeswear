import React from 'react'
import Products from '../components/Products'

const Tshirts = () => {
  let prods = [];
  for (let index = 0; index < 8; index++) {
    prods.push({index, title:'T-Shirts', desc:'Wear the code', price:"₹599", size:['S','M','L','Xl', 'XXl'], imgLink:"https://m.media-amazon.com/images/I/614XDGHnG4L._UL1500_.jpg"});
  }
  return (
    <div>
      <Products Products={prods}/>
    </div>
  )
}

export default Tshirts