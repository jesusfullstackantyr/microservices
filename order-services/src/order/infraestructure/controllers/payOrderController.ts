import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../application/createOrderUseCase";
import { PayOrderUseCase } from "../../application/payOrderUseCase";

export class PayOrderController {

    constructor(readonly useCase:PayOrderUseCase){}

    async execute(request:Request,response:Response) {
        try {

            let orderId = 5;

            let order = await this.useCase.execute(orderId);

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