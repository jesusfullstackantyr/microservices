import { CreateProductUseCase } from "../application/createProductUseCase";
import { ListProductUseCase } from "../application/listProductUseCase";
import { CreateProductController } from "./controllers/createProductController";
import { ListProductController } from "./controllers/listProductController";
import { MysqlProductRepository } from "./repositories/mysqlProductRepository";


const mysqlProductRepository = new MysqlProductRepository();
const createProductUseCase = new CreateProductUseCase(mysqlProductRepository);

export const createProductController = new CreateProductController(createProductUseCase);

const listProductUseCase = new ListProductUseCase(mysqlProductRepository);

export const listProductController = new ListProductController(listProductUseCase);