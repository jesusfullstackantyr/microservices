import { Product } from "../domain/entities/Product";
import { ProductRepository } from "../domain/repositories/productRepository";


export class ListProductUseCase {

    constructor(readonly productRepository:ProductRepository) {}

    async execute():Promise<Product[]|any|null> {
        const products = await this.productRepository.listProducts();
        return products;
    }

}