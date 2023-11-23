import { Order } from "../domain/entities/order";
import { OrderRepository } from "../domain/repositories/orderRepository";
import { RabbitMQService } from "./services/rabbit";

export class PayOrderUseCase {

    constructor(readonly orderRepository:OrderRepository, readonly rabbit:RabbitMQService) {}

    async execute(orderId:number):Promise<Order|any|null> {

        let order = new Order(orderId,100,"PAYED");

        let updatedOrder = await this.orderRepository.payOrder(order);

        await this.rabbit.connect();

        const products = [{ productId: 'product1', quantity: 2 }, { productId: 'product2', quantity: 1 }];

        await this.rabbit.publishMessage('orders-exchange', 'order.paid',{ orderId, products });

        return updatedOrder;

    }
}