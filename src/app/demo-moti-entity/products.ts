import { Entity, Field, IdEntity, isBackend } from "remult";
import { MotiEntity } from "./moti-entity";

@Entity<Products>('products', {
    allowApiCrud: true,
    saving: self => {
        self.mySaving();
    }
})
export class Products extends MotiEntity {
    @Field()
    name: string = '';
}