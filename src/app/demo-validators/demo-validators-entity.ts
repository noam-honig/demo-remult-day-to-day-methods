import { Entity, Field, IdEntity, Validators } from "remult";

@Entity("demovalidatorsentity", { allowApiCrud: true })
export class DemoValidatorsEntity extends IdEntity {
    @Field<DemoValidatorsEntity, string>({
        validate: (self, col) => {
            if (col.value=='')
                col.error = "bbbb";
        }
    })
    a: string = '';
}