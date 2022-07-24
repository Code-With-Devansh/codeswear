import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // let subTotal = 0;
  useEffect(() => {
    try{
    if(localStorage.getItem('cart')!==null){
      setCart(JSON.parse(localStorage.getItem('cart')))
      calcSubTotal(JSON.parse(localStorage.getItem('cart')))
    }else{
      setCart({})
    }
    }catch(error){
      console.error(error)
      localStorage.clear();
    }
  }, [])
  const [Cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState({total:0});
  let saveCart = (arr)=>{
    console.log(arr);
    localStorage.setItem('cart', JSON.stringify(arr));
    let subt = 0;
    let price = 499;
    // to do fetch the price using the item id.
    Object.keys(Cart).forEach(element => {
      subt += price * Cart[element];
    });
    setSubTotal({total:subt}); 
  }
  let calcSubTotal = (cart)=>{
    let subt = 0;
    let price = 499;
    // to do fetch the price using the item id.
    Object.keys(cart).forEach(element => {
      subt += price * cart[element];
    });
    setSubTotal({total:subt}); 
  }
  let addToCart = (itemId)=>{
    let arr = Cart;
    let found = false;
    Object.keys(Cart).forEach((val)=>{
      if(val === itemId){
        arr[val]++;
        found = true;
      
    }})
    if(!found){
      arr[itemId] = 1;
    }
    console.log(arr);
    setCart(arr);
    saveCart(arr);
  }
  let clearCart = ()=>{
    setCart({});
    console.log('cart has been cleared');
    localStorage.removeItem('cart');
    setSubTotal({total:0})
  }
  let removeFromCart = (itemId)=>{
    let arr = Cart;
    let found = false;
    Object.keys(arr).forEach((val)=>{
      if(val === itemId){
        arr[val]--;
        if(arr[val] === 0){
              delete arr[val];
            }
        found = true;
    }})
    if(!found){
      console.error('the item is not present in the cart');
    }
    setCart(arr);
    saveCart(arr);
  }
  return (
    <>
      <Navbar key={subTotal.total} cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}subTotal={subTotal} setCart={setCart}/>
      <Component cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}subTotal={subTotal} setCart={setCart} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
