import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  const basketCount = basket.reduce((acc, sum) => acc + sum.count, 0);
  return (
    <nav className="flex justify-between items-center gap-y-3 flex-col sm:flex-row px-16 py-5 bg-white fixed z-50 w-full shadow-md">
      <div className="logo">
        <Link to="/">
          <img
            src="https://preview.colorlib.com/theme/shop/img/logo.png"
            alt=""
          />
        </Link>
      </div>
      <ul className="navlist flex items-center gap-5 text-xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="add">Add</NavLink>
        </li>
        <li>
          <NavLink to="basket">Basket({basketCount})</NavLink>
        </li>
      </ul>
    </nav>
  );
}
