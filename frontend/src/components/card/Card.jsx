import React from "react";
import { IoMdBasket } from "react-icons/io";
import { useNavigate } from "react-router";

export default function Card({ item, handleBasket }) {
  const navigate = useNavigate();

  return (
    <div
      className="card cursor-pointer"
      onClick={() => navigate(`details/${item._id}`)}
    >
      <div>
        <img src={`${item.img}`} alt="" className="w-full" />
      </div>
      <div className="content flex items-center justify-between mt-5">
        <div className="font-bold text-2xl flex flex-col gap-3">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
        <button onClick={(e) => handleBasket(item, e)}>
          <IoMdBasket className="text-blue-600 text-5xl" />
        </button>
      </div>
    </div>
  );
}
