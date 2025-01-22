import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";

export default function Details() {
  const { id } = useParams("id");
  const [item, setItem] = useState({});
  async function getData() {
    try {
      let res = await axios.get(`http://localhost:5000/products/${id}`);
      setItem(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-16 py-32 flex items-center justify-center">
      <Helmet>
        <title>{`Details | ${item.title}`}</title>
      </Helmet>
      <div
        className="card w-full sm:w-5/12"
        onClick={() => navigate(`details/${item._id}`)}
      >
        <div>
          <img src={`${item.img}`} alt="" className="w-full" />
        </div>
        <div className="content flex items-center justify-between mt-5 font-bold text-2xl">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>

        <p className="text-center mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          totam expedita blanditiis, suscipit, optio iusto laborum vel sunt
          impedit placeat asperiores! Commodi consectetur natus adipisci
          reprehenderit reiciendis temporibus aliquid eaque sed eum ducimus,
          blanditiis soluta fuga placeat iste asperiores voluptatem aperiam
          dolorum, hic facilis id dolore in perferendis magni eius?
        </p>
      </div>
    </div>
  );
}
