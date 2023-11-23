import { IsNotEmpty } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from "../validations/validatable";


export class Product implements ValidatableEntity {

    public id:number|null;

    @IsNotEmpty()
    public uuid:string;

    @IsNotEmpty()
    public title:string;

    @IsNotEmpty()
    public stock:number;

    @IsNotEmpty()
    public price:number;

    @IsNotEmpty()
    public status:string;

    constructor(id:number|null,title:string,price:number,stock:number,status:string) {
        this.id = id;
        this.uuid = uuidv4();;
        this.title = title;
        this.stock = stock;
        this.price = price;
        this.status = status;
    }

    async validate() {
        return Promise.resolve();
    }


}