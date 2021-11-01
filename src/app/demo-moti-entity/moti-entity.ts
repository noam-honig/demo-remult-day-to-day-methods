import { Entity, Field, IdEntity, isBackend, Remult } from "remult";


export class MotiEntity extends IdEntity {
    @Field({ allowApiUpdate: false })
    createDate: Date = new Date();
    @Field({ allowApiUpdate: false })
    createUserId: string = this.remult.user.id;
    constructor(private remult: Remult) {
        super();
    }
    mySaving(){
        console.log("");
    }
} 