import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/createProductUseCase";

export class CreateProductController {

    constructor(readonly useCase:CreateProductUseCase) {}

    async execute(request:Request,response:Response) {
        try{

            let product = await this.useCase.execute(request.body);

            return response.status(201).json(product);

        }catch(error:any) {
            return response.status(error.http_status ?? 500)
                .json({
                    message:"Error to create a product",
                    error:error
                });
        }
    }

}