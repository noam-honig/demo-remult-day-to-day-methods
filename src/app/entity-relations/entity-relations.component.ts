import { Component, OnInit } from '@angular/core';
import { Remult } from 'remult';
import { Order, OrderDetail, Product } from './model';

@Component({
  selector: 'app-entity-relations',
  templateUrl: './entity-relations.component.html',
  styleUrls: ['./entity-relations.component.scss']
})
export class EntityRelationsComponent implements OnInit {

  constructor(private remult: Remult) { }
  orders = [] as Order[];
  async ngOnInit() {
    await this.createSomeProducts();
    console.clear();
    this.orders = await this.remult.repo(Order).find();
  }
  async createSomeProducts() {

    let repo = this.remult.repo(Product);
    let prods = [] as Product[];
    for (const prod of ["Beer", "Bread", "Wine"]) {
      prods.push(await (await repo.findFirst({
        where: p => p.name.isEqualTo(prod),
        createIfNotFound: true
      })).save());
    }
    console.table(prods);

    let order = await (await this.remult.repo(Order).findFirst({
      where: o => o.num.isEqualTo(1),
      createIfNotFound: true
    })).save();
    order.stam = {
      firstName: 'noam',
      lastName: 'honig'
    }
    order.stamArray = [{ name: 'noam' }, { name: 'moti' }];
    await order.save();

    let order2 = await (await this.remult.repo(Order).findFirst({
      where: o => o.num.isEqualTo(2),
      createIfNotFound: true
    })).save();

    let odRepo = this.remult.repo(OrderDetail);
    for (const od of await odRepo.find()) {
      await od.delete();
    }

    await (await order.details.create({
      product: prods[0],
      quantity: 5
    })).save();
    await odRepo.create({
      order: order.id,
      product: prods[0],
      quantity: 2
    }).save();
    await odRepo.create({
      order: order.id,
      product: prods[0],
      quantity: 7
    }).save();

    await (await order2.details.create({
      quantity: 2,
      product: prods[2]
    })).save();
    await (await order2.details.create({
      quantity: 4,
      product: prods[1]
    })).save();



  }

}
