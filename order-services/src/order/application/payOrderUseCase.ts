import { Order } from "../domain/entities/order";
import { OrderRepository } from "../domain/repositories/orderRepository";
import { RabbitMQService } from "./services/rabbit";

export class PayOrderUseCase {

    constructor(readonly orderRepository:OrderRepository, readonly rabbit:RabbitMQService) {}

    async execute(orderId:number):Promise<Order|any|null> {
        let order = new Order(orderId,100,"PAYED");

        let updatedOrder = await this.orderRepository.payOrder(order);

        await this.rabbit.connect();

        const orderPayed:any = {
            id:order.id,
            products:[{ id: 1, stock: 2 }, { id: 2, stock: 1 }]
        };

        await this.rabbit.publishMessage('orders-exchange', 'order.paid',{ order:orderPayed });

        return updatedOrder;
    }
}