import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
  img: Yup.string().url().required("Required"),
});

export default function Add() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:5000/products/${id}`);
    setData([...data].filter((item) => item._id != id));
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="px-16 py-72 flex flex-col gap-10 justify-center items-center">
      <Helmet>
        <title>Add product</title>
      </Helmet>
      <Formik
        initialValues={{
          title: "",
          img: "",
          price: "",
        }}
        validationSchema={AddSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await axios.post("http://localhost:5000/products", values);
            await getData();
            resetForm();
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex w-full sm:w-7/12 flex-col gap-3">
            <Field
              name="title"
              className="p-2 border border-orange-500 rounded outline-none text-xl"
              placeholder="Title..."
            />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field
              name="img"
              className="p-2 border border-orange-500 rounded outline-none text-xl"
              placeholder="Image..."
            />
            {errors.img && touched.img ? <div>{errors.img}</div> : null}
            <Field
              name="price"
              className="p-2 border border-orange-500 rounded outline-none text-xl"
              placeholder="Price..."
            />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <button
              type="submit"
              className="bg-orange-500 text-white text-xl p-2 rounded"
            >
              Add product
            </button>
          </Form>
        )}
      </Formik>

      <table className="border-collapse w-full ">
        <tr>
          <th className="border p-2 bg-green-500 text-white">Title</th>
          <th className="border p-2 bg-green-500 text-white">Image</th>
          <th className="border p-2 bg-green-500 text-white">Price</th>
          <th className="border p-2 bg-green-500 text-white">Actions</th>
        </tr>
        {data.map((item) => (
          <tr key={item._id}>
            <td className="border p-2">{item.title}</td>
            <td className="border p-2 flex items-center justify-center">
              <img src={`${item.img}`} alt="" className="w-40 aspect-square" />
            </td>
            <td className="border p-2">${item.price}</td>

            <td className="border p-2">
              <button
                className="text-xl border p-2 rounded bg-rose-600 text-white"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
