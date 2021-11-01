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
  details = [] as OrderDetail[];
  async ngOnInit() {
    await this.createSomeProducts();
    console.clear();
    this.details = await this.remult.repo(OrderDetail).find();


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

    let odRepo = this.remult.repo(OrderDetail);
    for (const od of await odRepo.find()) {
      await od.delete();
    }

     await odRepo.create({
      order: order.id,
      product: prods[0],
      quantity: 5
    }).save();
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
    


  }

}
