export class Timestamp {
    
    public createdAt:Date;
    public updatedAt:Date;
    public deletedAt:Date;

    constructor(createdAt:Date,updatedAt:Date,deletedAt:Date) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    
}