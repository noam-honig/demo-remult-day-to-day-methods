import { Entity, Field, IdEntity, Validators, FieldRef } from "remult";

const myValidation = (_: any, col: FieldRef<any, string>) => {
    if (col.value == '')
        col.error = "bbbb";
}
const myRequired = Validators.required.withMessage("שדה חובה");

@Entity<DemoValidatorsEntity>("demovalidatorsentity", {
    allowApiCrud: true,
    validation: self => {
        if (1 == 1)
            self._.error = "entity error";
        if (self.a != self.b)
            self.$.b.error = "doesn't match a";
    }
})
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