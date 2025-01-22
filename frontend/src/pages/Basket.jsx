import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteProduct,
  increment,
} from "../redux/slices/basketSlice";
import { Helmet } from "react-helmet-async";

export default function Basket() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      {basket.length > 0 ? (
        <div className="px-16 py-96">
          <table className="border-collapse w-full ">
            <tr>
              <th className="border p-2 bg-green-500 text-white">Title</th>
              <th className="border p-2 bg-green-500 text-white">Image</th>
              <th className="border p-2 bg-green-500 text-white">Price</th>
              <th className="border p-2 bg-green-500 text-white">
                Total Price
              </th>
              <th className="border p-2 bg-green-500 text-white">Count</th>
              <th className="border p-2 bg-green-500 text-white">Actions</th>
            </tr>
            {basket.map((item) => (
              <tr key={item._id}>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2 flex items-center justify-center">
                  <img
                    src={`${item.img}`}
                    alt=""
                    className="w-40 aspect-square"
                  />
                </td>
                <td className="border p-2">${item.price}</td>
                <td className="border p-2">${item.price * item.count}</td>
                <td className="border p-2 ">
                  <button
                    className="text-xl border p-2"
                    onClick={() => dispatch(decrement(item))}
                  >
                    -
                  </button>
                  <span className="px-5">{item.count}</span>
                  <button
                    className="text-xl border p-2"
                    onClick={() => dispatch(increment(item))}
                  >
                    +
                  </button>
                </td>
                <td className="border p-2">
                  <button
                    className="text-xl border p-2 rounded bg-rose-600 text-white"
                    onClick={() => dispatch(deleteProduct(item))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <p className="text-5xl text-center py-[26rem]">Your basket is empty!</p>
      )}
    </>
  );
}
