import { CreateProductUseCase } from "../application/createProductUseCase";
import { DecreaseSoldStockUseCase } from "../application/decreaseSoldStockUseCase";
import { ListProductUseCase } from "../application/listProductUseCase";
import { CreateProductController } from "./controllers/createProductController";
import { DecreaseSoldStockController } from "./controllers/decreaseSoldStockController";
import { ListProductController } from "./controllers/listProductController";
import { MysqlProductRepository } from "./repositories/mysqlProductRepository";


const mysqlProductRepository = new MysqlProductRepository();
const createProductUseCase = new CreateProductUseCase(mysqlProductRepository);

export const createProductController = new CreateProductController(createProductUseCase);

const listProductUseCase = new ListProductUseCase(mysqlProductRepository);

export const listProductController = new ListProductController(listProductUseCase);

const decreaseSoldStockUseCase = new DecreaseSoldStockUseCase(mysqlProductRepository);
export const decreaseSoldStockController = new DecreaseSoldStockController(decreaseSoldStockUseCase);