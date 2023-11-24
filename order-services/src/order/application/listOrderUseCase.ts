import { MysqlRepository } from "../infraestructure/repositories/msqylRepository";

export class ListOrderUseCase {

    constructor(readonly repository:MysqlRepository) {}

    async execute(orderId:number) {
        let order = await this.repository.getOrder(orderId);

        return order;
    }

}