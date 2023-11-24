import { Request, Response } from "express";
import { ListOrderUseCase } from "../../application/listOrderUseCase";
import sendMessageAndWaitForResponse from "../services/sagaMessagin";

export class ListOrderController {

    constructor(readonly useCase:ListOrderUseCase){}

    async execute(request:Request,response:Response) {
        try {

            console.log("ORDER: X")
           
            let orderId = 5;

            let order = await this.useCase.execute(orderId);

            let products:any[] = [
                {
                    id:1
                },
                {
                    id:2
                }
            ];

            const orderProducts = await sendMessageAndWaitForResponse('getProductsForOrder',{ products });

            order?.setProducts(orderProducts);

            return response.status(200).json(order);

        }catch(error:any) {
            response.status(error.http_status ?? 500)
                .json({
                    message:"Error to create an order",
                    error:error
                });
        }
    }

}