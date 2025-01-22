import { model, Schema } from "mongoose";

let PorductSchema = new Schema({
    img: String,
    title: String,
    price: Number
})

export let ProductModel = new model("products", PorductSchema)