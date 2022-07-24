import React, { useState } from "react";
import Link from "next/link";
const Products = (props) => {
  const [Prod, setProd] = useState(props.Products);
  let i = 0;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Prod.map((val) => {
              return (
                <Link 
                 href={"/products/wear-the-code"} key={val.index}>
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                      <a className="block relative rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto md:mx-0 md:m-0 h-[30vh] md:h-[36vh] block"
                          src={val.imgLink}
                        />
                      </a>
                      <div className="mt-4 text-center md:text-left">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {val.title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {val.desc}
                        </h2>
                        <p className="mt-1">{val.price}</p>
                        {val.size && <p className="mt-1">{val.size.map((element)=>{
                          if(i===val.size.length - 1){
                            i = 0;
                            return element;
                          }
                          i++;
                          return element + ", "
                        })}</p>}
                      </div>
                    </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
