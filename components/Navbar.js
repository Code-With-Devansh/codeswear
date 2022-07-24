import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { useRef, useState } from "react";

const Navbar = (props) => {
  let { addToCart, removeFromCart, clearCart, cart, subTotal } = props;
  const [cartItems, setCartItems] = useState({});
  const [Total, setTotal] = useState({ total: 0 });
  useEffect(() => {
    setCartItems(cart);
    setTotal(subTotal);
  }, [cart, subTotal]);

  const ref = useRef();
  let toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };
  return (
    <div className="bg-white sticky top-0 flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md mb-1 z-10">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image src={"/logo.jpg"} width={60} height={60} alt="..." />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex  items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="flex cart absolute right-0 mx-5 top-4 cursor-pointer">
        <span className="text-xl md:text-3xl mx-2">
          <Link href="/login"><a>
            <RiAccountCircleLine /></a>
          </Link>
        </span>
        <span onClick={toggleCart} className="text-xl md:text-3xl mx-2">
          <AiOutlineShoppingCart />
        </span>
      </div>

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transition-transform ${
          Object.keys(cartItems).length === 0
            ? "translate-x-full"
            : "translate-x-" + 0
        } transform`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-2xl text-pink-500 "
        >
          <AiFillCloseCircle />
        </span>
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

        <div className="font-bold my-2">Subtotal: ₹{Total.total}</div>
        <div className="flex">
          <Link href="/checkout">
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-500 border-0 p-1 focus:outline-none hover:bg-pink-700 rounded mx-1">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={() => {
              clearCart();
            }}
            className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-500 border-0 px-2 py-1 focus:outline-none hover:bg-pink-700 rounded mx-1"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
