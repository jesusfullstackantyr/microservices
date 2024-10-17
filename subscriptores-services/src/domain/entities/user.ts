import { Timestamp } from "./value-objects/timestamp";
import { UserIndetifier } from "./value-objects/userindetifier";

export class User {

    public userindetifier:UserIndetifier;
    public email:string;
    public password:string;
    public status:string;
    public timestamps:Timestamp;
    public username:string;

    constructor(email:string,password:string,status:string,timestamps:Timestamp,username:string) {
        this.userindetifier.uuid = "asignar uuid"; 
        this.email = email;
        this.password = password;
        this.status = status;
        this.timestamps = timestamps;
        this.username = username;
    }

}