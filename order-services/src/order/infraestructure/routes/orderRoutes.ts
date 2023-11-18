import express,{ Router } from "express";
import { addItemController, createOrderController } from "../dependencies";

export const orderRouter:Router = express.Router();

orderRouter.post('/',createOrderController.execute.bind(createOrderController));
orderRouter.post('/:order_id/add_item',addItemController.execute.bind(addItemController));