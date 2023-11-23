import { Product } from "../entities/Product";


export interface ProductRepository {
    listProducts():Promise<Product[] | null>;
    createProduct(product:Product):Promise<Product|null>;
    listProduct(id:string):Promise<Product|null>;
    decreaseStock(productId:number,stock:number):Promise<any|null>;
}