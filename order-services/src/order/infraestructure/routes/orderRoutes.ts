import express,{ Router } from "express";
import { addItemController, createOrderController, listOrderController, payOrderController } from "../dependencies";

export const orderRouter:Router = express.Router();

orderRouter.post('/',createOrderController.execute.bind(createOrderController));
orderRouter.post('/:order_id/add_item',addItemController.execute.bind(addItemController));
orderRouter.put('/:order_id/pay',payOrderController.execute.bind(payOrderController));
orderRouter.get('/:order_id',listOrderController.execute.bind(listOrderController));