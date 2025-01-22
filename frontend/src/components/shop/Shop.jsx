import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/slices/basketSlice";
export default function Shop() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products");
      setData(res.data);
      setTempData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleBasket(item, e) {
    e.stopPropagation();
    dispatch(addBasket(item));
  }

  function handleSearch(e) {
    const value = e.target.value;
    setData(
      [...tempData].filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function handleSort(e) {
    const value = e.target.value;
    if (value == "name") {
      setData([...data].toSorted((a, b) => a.title.localeCompare(b.title)));
    } else {
      setData([...tempData]);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="px-16 py-10">
      <div className="header text-center flex flex-col gap-3 ">
        <h1 className="text-4xl font-bold">New realeased Products for Women</h1>
        <p className="text-gray-400">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <div className="w-full flex items-center justify-center py-10 gap-4 flex-col sm:flex-row">
        <input
          type="search"
          className="p-3 text-xl rounded-full border"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
        />
        <select
          className="p-3 text-xl rounded-full border"
          onChange={(e) => handleSort(e)}
        >
          <option value="default">Default</option>
          <option value="name">Sort by name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 items-center mt-10">
        {data.map((item) => (
          <Card item={item} key={item._id} handleBasket={handleBasket} />
        ))}
      </div>
    </div>
  );
}
