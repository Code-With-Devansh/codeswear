import React from 'react'
import Products from '../components/Products'

const Mugs = () => {
  let prods = [];
  for (let index = 0; index < 8; index++) {
    prods.push({index, title:'Mugs', desc:'Drink the Code', price:"₹150", imgLink:"https://images-eu.ssl-images-amazon.com/images/I/41wvQleCmmL._SX300_SY300_QL70_FMwebp_.jpg"});
  }
  return (
    <div>
      <Products Products={prods}/>
    </div>
  )
}

export default Mugs