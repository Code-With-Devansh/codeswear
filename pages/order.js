import React from "react";

const Order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500">
              codeswear.com
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #4864165168548
            </h1>
            <p className="leading-relaxed mb-4">
              Your Order has been succesfully placed
            </p>
            <div className="flex border-b border-pink-700 py-2">
              <div className="text-gray-500 w-1/3 text-right text-pink-800">Item Name</div>
              <div className="w-1/3 text-right text-gray-900 text-pink-800">Quantity</div>
              <div className="w-1/3 text-right text-gray-900 text-pink-800">Price</div>
            </div>
            <div className="flex py-2">
              <div className="text-gray-500 w-1/3 text-right">Wear the code (XL, Red)</div>
              <div className="w-1/3 text-right text-gray-900">5</div>
              <div className="w-1/3 text-right text-gray-900">₹499</div>
            </div>
            <div className="flex border-t border-gray-400 py-2">
              <div className="text-gray-500 w-1/3 text-right">Wear the code (XL, Red)</div>
              <div className="w-1/3 text-right text-gray-900">5</div>
              <div className="w-1/3 text-right text-gray-900">₹499</div>
            </div>
            <div className="flex border-t border-gray-400 py-2">
              <div className="text-gray-500 w-1/3 text-right">Wear the code (XL, Red)</div>
              <div className="w-1/3 text-right text-gray-900">5</div>
              <div className="w-1/3 text-right text-gray-900">₹499</div>
            </div>
            
            
            <div className="title-font font-medium text-2xl text-gray-900">
              SubTotal: ₹499
            </div>
            <button className="flex my-2 text-white bg-pink-600 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded">
                Track your Order
              </button>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
