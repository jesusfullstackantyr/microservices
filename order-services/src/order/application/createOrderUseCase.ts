import { Order } from "../domain/entities/order";
import { OrderRepository } from "../domain/repositories/orderRepository";
import { Validator } from "../domain/validations/orderValidate";

export class CreateOrderUseCase {

    constructor(readonly orderRepository:OrderRepository) {}

    async execute(total:number,status:string):Promise<Order|any|null> {
        
        let order = new Order(null,total,status);

        let orderValidate = new Validator<Order>(order);

        await orderValidate.invalidIfHasErrors();

        let createdOrder = await this.orderRepository.createOrder(order);

        return createdOrder;
    }
}