import { Entity, Field, IdEntity } from "remult";

@Entity("demovalidatorsentity", { allowApiCrud: true })
export class DemoValidatorsEntity extends IdEntity {
    @Field()
    a: string = '';
}