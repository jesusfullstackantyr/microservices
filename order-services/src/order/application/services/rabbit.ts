export interface RabbitMQService {
    publishMessage(exchange: string, routingKey: string, message: any): Promise<void>;
}
