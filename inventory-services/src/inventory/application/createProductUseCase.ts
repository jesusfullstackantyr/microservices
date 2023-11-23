import { Product } from "../domain/entities/Product";
import { ProductRepository } from "../domain/repositories/productRepository";
import { Validator } from "../domain/validations/productValidate";


export class CreateProductUseCase {

    constructor(readonly productRepository:ProductRepository) {}

    async execute({title,price,stock,status}:any):Promise<Product|any|null> {
        let product = new Product(null,title,price,stock,status);

        let productValidated = new Validator<Product>(product);

        await productValidated.invalidIfHasErrors();

        let productCreated = await this.productRepository.createProduct(product);

        return productCreated;
    }

}