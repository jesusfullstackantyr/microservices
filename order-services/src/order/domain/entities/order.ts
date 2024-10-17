import { IsNotEmpty } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from "../validations/validatable";
import { Email } from "./email";

export class Order implements ValidatableEntity {

    public id:number|null;

    @IsNotEmpty()
    public uuid:string;

    @IsNotEmpty()
    public total:number;

    @IsNotEmpty()
    public status:string;

    public products:any[] | null;

    public email:Email;

    constructor(id:number|null,total:number,status:string, email:Email) {
        this.id = id;
        this.uuid = uuidv4();;
        this.total = total;
        this.status = status;
        this.products = [];
        this.email = email;
    }

    public setProducts(products:any[]) {
        this.products = products;
    }

    async validate() {
        return Promise.resolve();
    }


}