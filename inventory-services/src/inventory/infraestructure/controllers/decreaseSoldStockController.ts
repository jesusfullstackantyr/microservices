import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/createProductUseCase";
import { DecreaseSoldStockUseCase } from "../../application/decreaseSoldStockUseCase";

export class DecreaseSoldStockController {

    constructor(readonly useCase:DecreaseSoldStockUseCase) {}

    async execute(request:Request,response:Response) {
        try{
            let orderId = 5;

            let products = [
                {
                    id:1,
                    stock:3
                },
                {
                    id:2,
                    stock:4
                }
            ];

            await this.useCase.execute(orderId,products);

            return response.status(201).json({
                message:"El stock se ha descontado de manera correcta"
            });
        }catch(error:any) {
            return response.status(error.http_status ?? 500)
                .json({
                    message:"Error to create a product",
                    error:error
                });
        }
    }

}