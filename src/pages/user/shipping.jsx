/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar2 from "../../Components/user/Navbar";

const shippData = [
  {
    products: [{ name: "celana" }, { name: "baju" }, { name: "kaos" }],
    devId: 2222,
    qty: 12,
    date: "12-04-2023",
    pay: 200000,
    status: "Delivery",
  },
  {
    products: [{ name: "topi" }, { name: "sepatu" }, { name: "kaos kaki" }],
    devId: 123,
    qty: 7,
    date: "20-04-2023",
    pay: 150000,
    status: "Success",
  },
];

const Shipping = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <Navbar2 />
      <div className="cart container  mx-auto pt-[90px]">
        <div className="head p-2 lg:p-0">
          <div className="heading text-[18px]  pb-5 font-semibold">My Cart</div>
          <div className="heading h-[2px] rounded bg-gray-300"></div>
        </div>
        <div className="qt lg:pt-5 lg:pb-5">Order Process</div>
        {/* cart */}
        <div className="wrap-card flex flex-col gap-3">
          {shippData.map((item) => (
            <div key={item} className="card flex justify-between p-4 rounded-lg bg-[#ECE3CE] max-w-[735px]">
              <div className="left ">
                <div className="products text-[16px] font-semibold">
                {item.products.map((product, index) => (
                  <div key={index} className="">{product.name}</div>
                ))}
                </div>
                <div className="wrap text-[16px] mt-2">
                  <div className="dev">Delivery ID : {item.devId}</div>
                  <div className="TOT">Total Quantity : {item.qty}</div>
                </div>
              </div>
              <div className="right flex flex-col justify-between text-end ">
                <div className="tgl">{item.date}</div>
                <div className="wr items-end flex flex-col gap-1">
                  <div className="to">Total Payment : Rp. {item.pay}</div>
                  <div className={`text-[16px] flex justify-center rounded-[20px] bg-white p-1 w-[130px] font-semibold px-2 ${item.status === 'Success' ? 'text-[#739072] ' : 'text-red-500'}`}>
                  {item.status}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shipping;
