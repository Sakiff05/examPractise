import express from "express"
import cors from "cors"
import "./config/Config.js"
import { router } from "./router/Router.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/products", router)
app.listen(5000, () => {
    console.log("Listening at port 5000");
})
