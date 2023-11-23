import express from "express";
import { createProductController, decreaseSoldStockController, listProductController } from "../dependencies";

export const productRouter = express.Router();

productRouter.get('/',listProductController.execute.bind(listProductController));
productRouter.post('/',createProductController.execute.bind(createProductController));
productRouter.put('/:order_id/decrease-stock',decreaseSoldStockController.execute.bind(decreaseSoldStockController));