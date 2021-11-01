import { Entity, Field, IdEntity, OneToMany, Remult } from "remult";

@Entity("products_", { allowApiCrud: true })
export class Product extends IdEntity {
    @Field()
    name: string = '';
}

@Entity("orders", { allowApiCrud: true })
export class Order extends IdEntity {
    @Field()
    num: number = 0;
    @Field()
    stam!: {
        firstName: string,
        lastName: string
    }
    @Field()
    stamArray!: {
        name: string
    }[];

    details = new OneToMany(this.remult.repo(OrderDetail), {
        where: od => od.order.isEqualTo(this.id)
    })
    constructor(private remult: Remult) {
        super();
    }
}

@Entity("orderDetails", {
    allowApiCrud: true
})
export class OrderDetail extends IdEntity {
    @Field()
    order: string = '';
    @Field()
    product!: Product;
    @Field()
    quantity: number = 0;
}