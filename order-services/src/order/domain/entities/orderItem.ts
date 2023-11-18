import { IsNotEmpty } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from "../validations/validatable";

export class OrderItem implements ValidatableEntity {

    public id:number|null;

    @IsNotEmpty()
    public uuid:string;

    @IsNotEmpty()
    public productId:number;

    @IsNotEmpty()
    public orderId:number;

    @IsNotEmpty()
    public amount:number;

    @IsNotEmpty()
    public price:number;

    constructor(id:number|null,productId:number,orderId:number,amount:number,price:number) {
        this.id = id;
        this.uuid = uuidv4();;
        this.productId = productId;
        this.orderId = orderId;
        this.amount = amount;
        this.price = price;
    }
    
    async validate() {
        return Promise.resolve();
    }


}