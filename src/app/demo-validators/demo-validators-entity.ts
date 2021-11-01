import { Entity, Field, IdEntity, Validators } from "remult";

@Entity("demovalidatorsentity", { allowApiCrud: true })
export class DemoValidatorsEntity extends IdEntity {
    @Field({
        validate:Validators.required
    })
    a: string = '';
}