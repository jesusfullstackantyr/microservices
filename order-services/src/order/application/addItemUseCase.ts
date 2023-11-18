import { Order } from "../domain/entities/order";
import { OrderItem } from "../domain/entities/orderItem";
import { OrderRepository } from "../domain/repositories/orderRepository";
import { Validator } from "../domain/validations/orderValidate";


export class AddITemToOrderUseCase {

    constructor(readonly orderRepository:OrderRepository) {}

    async execute(productId:number,orderId:number,amount:number,price:number):Promise<OrderItem|any|null> {
        
        let orderItem = new OrderItem(null,productId,orderId,amount,price);

        let orderValidate = new Validator<OrderItem>(orderItem);

        await orderValidate.invalidIfHasErrors();

        let addItemAdded = await this.orderRepository.addItem(orderItem);

        return addItemAdded;
    }
}