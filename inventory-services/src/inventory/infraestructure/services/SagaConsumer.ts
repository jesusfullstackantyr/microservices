import * as amqp from 'amqplib';
export const consumeMessages = async () => {
    const connection = await amqp.connect('amqp://127.0.0.1');
    const channel    = await connection.createChannel();
    const exchange   = 'saga_exchange';
    const queue      = 'products_queue';

    await channel.assertExchange(exchange,'direct',{durable:false});

    await channel.assertQueue(queue,{durable:false});
    await channel.bindQueue(queue,exchange,'getProductsForOrder');

    console.log('[*] Waiting for order messages. To exit press CTRL+C');

    channel.consume(queue,async(msg:any) => {
        const message = JSON.parse(msg.content.toString());

        await handleOrderMessage(
            message,
            msg.properties.replyTo,
            msg.properties.correlationId,
            channel
        );
        console.log(`[x] Received order message: ${JSON.stringify(message)}`);
    },{noAck:true});
}

const handleOrderMessage = async (message:any,replyTo:string,correlationId:string,channel: amqp.Channel) =>{
    try {
        const products:any = [
            {
                id:1,
                title:"T-shirt",
                price:4
            },
            {
                id:2,
                title:"T-shirt-2",
                price:4
            }
        ];
        const response = { products };
        channel.sendToQueue(replyTo,Buffer.from(JSON.stringify(response)),{correlationId});
        console.log('Responded to temporary queue:', response);
    }catch(error:any) {
        console.error('Error al manejar el mensaje de la orden:', error.message);
    }
}