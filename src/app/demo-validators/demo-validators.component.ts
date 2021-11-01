import { Component, OnInit } from '@angular/core';
import { GridSettings } from '@remult/angular';
import { Remult } from 'remult';
import { DemoValidatorsEntity } from './demo-validators-entity';

@Component({
  selector: 'app-demo-validators',
  templateUrl: './demo-validators.component.html',
  styleUrls: ['./demo-validators.component.scss']
})
export class DemoValidatorsComponent implements OnInit {

  constructor(private remult: Remult) { }
  grid = new GridSettings(this.remult.repo(DemoValidatorsEntity)
    , { allowCrud: true });

  ngOnInit(): void {
  }

}
