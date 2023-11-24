import { IsNotEmpty } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { ValidatableEntity } from "../validations/validatable";

export class Order implements ValidatableEntity {

    public id:number|null;

    @IsNotEmpty()
    public uuid:string;

    @IsNotEmpty()
    public total:number;

    @IsNotEmpty()
    public status:string;

    public products:any[] | null;

    constructor(id:number|null,total:number,status:string) {
        this.id = id;
        this.uuid = uuidv4();;
        this.total = total;
        this.status = status;
        this.products = [];
    }

    public setProducts(products:any[]) {
        this.products = products;
    }

    async validate() {
        return Promise.resolve();
    }


}