import { Timestamp } from "./value-objects/timestamp";
import { UserIndetifier } from "./value-objects/userindetifier";

export class User {

    public uuid:string;
    public name:string;
    public lastName:string;
    public email:string;
    public phone:string;
    public userindetifier:UserIndetifier;

    constructor(name:string,lastName:string,email:string,phone:string,userindetifier:UserIndetifier) {
        this.uuid = "asignar uuid"; 
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.userindetifier = userindetifier;
    }

}