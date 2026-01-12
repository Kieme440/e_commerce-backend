import express from "express";
import { getAllProducts, createNewProduct, updateProducts, deleteProducts } from "../controller/productController.js";

const helloRoute = express.Router();

helloRoute.get("/", getAllProducts);
helloRoute.post("/", updateProducts);
helloRoute.put("/:id", createNewProduct);
helloRoute.delete("/:id", deleteProducts);

export default helloRoute;

