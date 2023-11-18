import { Request, Response } from "express";
import { AddITemToOrderUseCase } from "../../application/addItemUseCase";

export class AddItemToOrderController {

    constructor(readonly useCase:AddITemToOrderUseCase){}

    async execute(request:Request,response:Response) {
        try {
            
            let orderItem = await this.useCase.execute(1,1,4,15);

            return response.status(200).json(orderItem);

        }catch(error:any) {
            response.status(error.http_status ?? 500)
                .json({
                    message:"Error to create an order",
                    error:error
                });
        }
    }

}