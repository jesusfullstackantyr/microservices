import { CreateProductUseCase } from "../application/createProductUseCase";
import { DecreaseSoldStockUseCase } from "../application/decreaseSoldStockUseCase";
import { ListProductUseCase } from "../application/listProductUseCase";
import { CreateProductController } from "./controllers/createProductController";
import { ListProductController } from "./controllers/listProductController";
import { MysqlProductRepository } from "./repositories/mysqlProductRepository";
import { startOrderConsumer } from "./services/orderConsumer";


const mysqlProductRepository = new MysqlProductRepository();
const createProductUseCase = new CreateProductUseCase(mysqlProductRepository);

export const createProductController = new CreateProductController(createProductUseCase);

const listProductUseCase = new ListProductUseCase(mysqlProductRepository);

export const listProductController = new ListProductController(listProductUseCase);

export async function drecreaseSoldStockUseCaseService() {
    const decreaseSoldStockUseCase = new DecreaseSoldStockUseCase(mysqlProductRepository);
    await startOrderConsumer(decreaseSoldStockUseCase);    
}