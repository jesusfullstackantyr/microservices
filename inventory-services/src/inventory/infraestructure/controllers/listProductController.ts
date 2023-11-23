import { Request, Response } from "express";
import { ListProductUseCase } from "../../application/listProductUseCase";

export class ListProductController {

    constructor(readonly useCase:ListProductUseCase) {}

    async execute(request:Request,response:Response) {
        try{
            let products = await this.useCase.execute();

            response.status(200).json(products);
        }catch(error:any) {
            return response.status(error.http_status ?? 500)
                .json({
                    message:"Error to create a product",
                    error:error
                });
        }
    }

}