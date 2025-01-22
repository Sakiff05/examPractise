import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteCard from "../components/favoriteCard/FavoriteCard";
import { addFavorite, removeFavorite } from "../redux/slices/favoriteSlice";

export default function Favorites() {
  const favorite = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();
  function handleFavorite(item, e) {
    e.stopPropagation();
    if (favorite.find((card) => card._id == item._id)) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }
  return (
    <div className="px-16 py-40">
      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
          {favorite.map((item) => (
            <FavoriteCard item={item} handleFavorite={handleFavorite} />
          ))}
        </div>
      ) : (
        <p className="py-72 text-center text-5xl">Your favorites is empty!</p>
      )}
    </div>
  );
}
