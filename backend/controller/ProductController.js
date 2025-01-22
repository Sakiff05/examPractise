import { ProductModel } from "../model/ProductModel.js";

export const ProductController = {
    getAll: async (req, res) => {
        let products = await ProductModel.find()
        res.send(products)
    },
    getById: async (req, res) => {
        let { id } = req.params
        let product = await ProductModel.findById(id)
        res.send(product)
    },
    delete: async (req, res) => {
        let { id } = req.params
        await ProductModel.findByIdAndDelete(id)
        res.send({
            message: "Successfully deleted",
        })
    },
    post: async (req, res) => {
        let newProduct = ProductModel(req.body)
        await newProduct.save()
        res.send(newProduct)
    },
}