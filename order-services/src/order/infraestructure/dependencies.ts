import { AddITemToOrderUseCase } from "../application/addItemUseCase";
import { CreateOrderUseCase } from "../application/createOrderUseCase";
import { ListOrderUseCase } from "../application/listOrderUseCase";
import { PayOrderUseCase } from "../application/payOrderUseCase";
import { AddItemToOrderController } from "./controllers/addItemController";
import { CreateOrderController } from "./controllers/createOrderController";
import { ListOrderController } from "./controllers/listOrderController";
import { PayOrderController } from "./controllers/payOrderController";
import { MysqlRepository } from "./repositories/msqylRepository";
import { RabbitMQ } from "./services/rabbit";


const orderMysqlRepository = new MysqlRepository();
const createOrderUseCase = new CreateOrderUseCase(orderMysqlRepository);

export const createOrderController = new CreateOrderController(createOrderUseCase);

const addItemUseCase = new AddITemToOrderUseCase(orderMysqlRepository);
export const addItemController = new AddItemToOrderController(addItemUseCase);

const rabbitMQ = new RabbitMQ();

const payOrderUseCase = new PayOrderUseCase(orderMysqlRepository,rabbitMQ);
export const payOrderController = new PayOrderController(payOrderUseCase);

const listOrderUseCase = new ListOrderUseCase(orderMysqlRepository);
export const listOrderController = new ListOrderController(listOrderUseCase);