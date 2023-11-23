import { Order } from "../entities/order";
import { OrderItem } from "../entities/orderItem";

export interface OrderRepository {
    createOrder(order:Order):Promise<Order|null>;
    addItem(orderItem:OrderItem):Promise<OrderItem | null>;
    payOrder(updatedOrder:Order):Promise<Order|null>;
}