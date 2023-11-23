import { ProductRepository } from "../domain/repositories/productRepository";

export class DecreaseSoldStockUseCase {
    
    constructor(readonly productRepository:ProductRepository) {}

    async execute(orderId:number,products:any[]):Promise<any|null> {
        products.forEach(
            async (product:any) =>
                await this.productRepository.decreaseStock(product.id,product.stock)
        );
    }

}