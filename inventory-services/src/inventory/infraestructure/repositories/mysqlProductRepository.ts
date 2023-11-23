import { query } from "../../../database/mysql";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/productRepository";

export class MysqlProductRepository implements ProductRepository {
    
    async decreaseStock(productId: number, stock: number): Promise<any> {
        let sql = "UPDATE products SET stock = stock - ? where id =  ?";
        const params:any[] = [stock,productId];
        const result = await query(sql,params);
        return result;
    }

    async listProducts(): Promise<Product[] | null> {
        let sql = "SELECT * FROM products WHERE status = 'AVAILABLE'";
        const [data]:any = await query(sql,[]);
        const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));
        
        return dataProducts.map(
            (product:any) => 
                new Product(
                    product.id,
                    product.title,
                    product.price,
                    product.stock,
                    product.status
                )
        );
    }
    async createProduct(product: Product): Promise<Product | null> {
        let sql = "INSERT INTO products(uuid,title,price,stock,status) values(?,?,?,?,?)";
        const params:any[] = [product.uuid,product.title,product.price,product.stock,product.status];
        const [result]:any = await query(sql,params);
        product.id = result.insertId;
        return product;
    }
    listProduct(id: string): Promise<Product | null> {
        throw new Error("Method not implemented.");
    }

}