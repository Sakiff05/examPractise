import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function FavoriteCard({ item, handleFavorite }) {
  const favorite = useSelector((state) => state.favorite.favorite);
  let isExist = favorite.find((card) => card._id == item._id);
  return (
    <div className="card ">
      <div>
        <img src={`${item.img}`} alt="" className="w-full" />
      </div>
      <div className="content flex items-center justify-between mt-5">
        <div className="font-bold text-2xl flex flex-col gap-3">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button onClick={(e) => handleFavorite(item, e)}>
            {isExist ? (
              <FaHeart className="text-rose-600 text-5xl" />
            ) : (
              <CiHeart className="text-rose-600 text-5xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
