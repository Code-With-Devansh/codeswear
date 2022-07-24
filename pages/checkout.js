import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const Checkout = (props) => {
  let { cart, clearCart, addToCart, removeFromCart, subTotal } = props;
  const [cartItems, setcartItems] = useState({});
  const [Total, setTotal] = useState({total:0});
  useEffect(() => {
      setcartItems(cart);
      setTotal(subTotal);
      console.log("props.subtotal = " + props.subTotal.total);
  }, [cart, subTotal]);

  return (
    <div className="container m-auto max-w-4xl px-4">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl mx-2 my-4">Delivery Details</h2>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="px-2 w-1/2">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="px-2 w-full">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          rows={2}
          type="address"
          id="address"
          name="address"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            Phone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="px-2 w-1/2">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="px-2 w-1/2">
          <label htmlFor="pinCode" className="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <h2 className="font-semibold text-xl mx-2 my-4">
        Review Cart Items And Pay
      </h2>
      <div className="container mx-8 l m-auto">
        <ol className="list-decimal font-semibold">
          {Object.keys(cartItems).length === 0 && (
            <div className="my-4 font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cartItems).map((val) => {
            return (
              <li key={val}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{val}</div>
                  {/* to do fetch the name of the product using its id */}
                  <div className="flex item-center justify-center font-semibold w-1/3 space-x-3">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(val);
                      }}
                      className="mx-2 my-1 text-xl text-pink-500 cursor-pointer"
                    />
                    {cartItems[val]}
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(val);
                      }}
                      className="mx-2 my-1 text-xl text-pink-500 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="font-bold">Subtotal: ₹{Total.total}</div>
      <button className="m-4 flex-shrink-0 inline-flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-700 rounded ">Pay ₹{Total.total}</button>
    </div>
  );
};

export default Checkout;
