import { Order } from "../domain/entities/order";
import { OrderRepository } from "../domain/repositories/orderRepository";

export class PayOrderUseCase {

    constructor(readonly orderRepository:OrderRepository) {}

    async execute(orderId:number):Promise<Order|any|null> {

        let order = new Order(orderId,100,"PAYED");

        let updatedOrder = await this.orderRepository.payOrder(order);

        return updatedOrder;

    }
}