import { Request, Response } from "express";
import { CreateOrderUseCase } from "../../application/createOrderUseCase";

export class CreateOrderController {

    constructor(readonly useCase:CreateOrderUseCase){}

    async execute(request:Request,response:Response) {
        try {
            let total = 0;
            let status = "PROCESS";

            let order = await this.useCase.execute(total,status);

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