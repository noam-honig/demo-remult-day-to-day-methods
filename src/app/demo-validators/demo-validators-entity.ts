import { Entity, Field, IdEntity, Validators, FieldRef } from "remult";

const myValidation = (_: any, col: FieldRef<any, string>) => {
    if (col.value == '')
        col.error = "bbbb";
}
const myRequired = Validators.required.withMessage("שדה חובה");

@Entity("demovalidatorsentity", { allowApiCrud: true })
export class DemoValidatorsEntity extends IdEntity {
    @Field<DemoValidatorsEntity, string>({
        validate: myRequired
    })
    a: string = '';
    @Field({
        validate: myValidation
    })
    b: string = '';
}