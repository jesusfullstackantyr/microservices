import express from "express";
import { createProductController, listProductController } from "../dependencies";

export const productRouter = express.Router();

productRouter.get('/',listProductController.execute.bind(listProductController));
productRouter.post('/',createProductController.execute.bind(createProductController));
