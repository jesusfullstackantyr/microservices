import { query } from "../../../database/mysql";
import { Order } from "../../domain/entities/order";
import { OrderItem } from "../../domain/entities/orderItem";
import { OrderRepository } from "../../domain/repositories/orderRepository";

export class MysqlRepository implements OrderRepository {
    
    async getOrder(orderId: number):Promise<Order | null> {
        const sql = "SELECT * FROM orders where id = ?";
        const params:any[] = [orderId];
        const result = await query(sql,params);
        let order = new Order(1,100,"PROCESS");
        return order;
    }
    
    async payOrder(updatedOrder: Order): Promise<Order | null> {
        const sql = "UPDATE orders SET status = ? where id = ?";
        const params:any[] = [updatedOrder.status,updatedOrder.id];
        await query(sql,params);
        return updatedOrder;
    }

    async createOrder(order: Order): Promise<Order | null> {
       let sql = "INSERT INTO orders(uuid,total,status) values(?,?,?)";
       const params:any[] = [order.uuid,order.total,order.status];
       const [result]:any = await query(sql,params);

       order.id = result.insertId;
       return order;
    }

    async addItem(orderItem: OrderItem): Promise<OrderItem | null> {
        let sql = "INSERT INTO order_items(uuid,product_id,order_id,amount,price) values(?,?,?,?,?)";
       const params:any[] = [orderItem.uuid,orderItem.productId,orderItem.orderId,orderItem.amount,orderItem.price];
       const [result]:any = await query(sql,params);

       orderItem.id = result.insertId;
       return orderItem;
    }
}