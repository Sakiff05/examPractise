import React from "react";

export default function Categories() {
  return (
    <div className="px-16 py-10 ">
      <div className="header text-center flex flex-col gap-3 ">
        <h1 className="text-4xl font-bold">Shop for Different Categories</h1>
        <p className="text-gray-400">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 py-10 gap-4 ">
        <div className="card ">
          <img
            src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp"
            alt=""
            className="w-full "
          />
        </div>
        <div className="card">
          <img
            src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="card sm:row-span-2">
          <img
            src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp"
            alt=""
            className="w-full"
          />
        </div>
        <div className="card sm:col-span-2">
          <img
            src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
