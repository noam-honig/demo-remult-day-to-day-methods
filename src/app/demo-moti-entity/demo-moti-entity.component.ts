import { Component, OnInit } from '@angular/core';
import { GridSettings } from '@remult/angular';
import { Remult } from 'remult';
import { Products } from './products';

@Component({
  selector: 'app-demo-moti-entity',
  templateUrl: './demo-moti-entity.component.html',
  styleUrls: ['./demo-moti-entity.component.scss']
})
export class DemoMotiEntityComponent implements OnInit {

  constructor(private remult: Remult) { }
  grid = new GridSettings(this.remult.repo(Products), { allowCrud: true });

  ngOnInit(): void {
  }

}
