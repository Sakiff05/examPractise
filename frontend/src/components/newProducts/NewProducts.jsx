import React from "react";
import styles from "./NewProducts.module.css";

export default function NewProducts() {
  return (
    <div className={`${styles.bgImg} `}>
      <div className="bg-rose-600 opacity-80 relative px-16 py-10">
        <div className="header text-center flex flex-col gap-3 ">
          <h1 className="text-4xl font-bold text-white">
            New realeased Products for Men
          </h1>
          <p className="text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 items-center mt-10">
          <div className="card">
            <div>
              <img
                src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp"
                alt=""
                className="w-full"
              />
            </div>
            <div className="content font-bold text-xl text-white flex flex-col gap-3">
              <p>Long Sleeve shirt</p>
              <p>$150</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src="https://preview.colorlib.com/theme/shop/img/l2.jpg.webp"
                alt=""
                className="w-full"
              />
            </div>
            <div className="content font-bold text-xl text-white flex flex-col gap-3">
              <p>Long Sleeve shirt</p>
              <p>$150</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src="https://preview.colorlib.com/theme/shop/img/l3.jpg.webp"
                alt=""
                className="w-full"
              />
            </div>
            <div className="content font-bold text-xl text-white flex flex-col gap-3">
              <p>Long Sleeve shirt</p>
              <p>$150</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src="https://preview.colorlib.com/theme/shop/img/l4.jpg.webp"
                alt=""
                className="w-full"
              />
            </div>
            <div className="content font-bold text-xl text-white flex flex-col gap-3">
              <p>Long Sleeve shirt</p>
              <p>$150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
