import { DecreaseSoldStockUseCase } from "../../application/decreaseSoldStockUseCase";
import { OrderSold } from "../../domain/entities/OrderSold";
import { setupRabbitMQ } from "../rabbitConfig";

export async function startOrderConsumer(useCase:DecreaseSoldStockUseCase) {

    const { connection, channel, queueName } = await setupRabbitMQ();

    console.log('Consumidor de Órdenes esperando mensajes...');

    // Consume mensajes de la cola
    channel.consume(queueName, (msg) => {
        if (msg) {

            const content:any = JSON.parse(msg.content.toString()) as OrderSold;
            const order = content.order;

            // Lógica para procesar la orden pagada

            useCase.execute(order.id,order.products);

            // Marcar el mensaje como entregado (acknowledge)
            channel.ack(msg);
        }
    });
}