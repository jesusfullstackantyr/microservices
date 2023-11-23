import { AddITemToOrderUseCase } from "../application/addItemUseCase";
import { CreateOrderUseCase } from "../application/createOrderUseCase";
import { PayOrderUseCase } from "../application/payOrderUseCase";
import { AddItemToOrderController } from "./controllers/addItemController";
import { CreateOrderController } from "./controllers/createOrderController";
import { PayOrderController } from "./controllers/payOrderController";
import { MysqlRepository } from "./repositories/msqylRepository";


const orderMysqlRepository = new MysqlRepository();
const createOrderUseCase = new CreateOrderUseCase(orderMysqlRepository);

export const createOrderController = new CreateOrderController(createOrderUseCase);

const addItemUseCase = new AddITemToOrderUseCase(orderMysqlRepository);
export const addItemController = new AddItemToOrderController(addItemUseCase);

const payOrderUseCase = new PayOrderUseCase(orderMysqlRepository);
export const payOrderController = new PayOrderController(payOrderUseCase);