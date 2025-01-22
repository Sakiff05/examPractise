import express from "express";
import { ProductController } from "../controller/ProductController.js";

export const router = express.Router()

router.get("/", ProductController.getAll)
router.get("/:id", ProductController.getById)
router.delete("/:id", ProductController.delete)
router.post("/", ProductController.post)
