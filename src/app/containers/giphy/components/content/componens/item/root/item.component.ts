import {Component, Input, OnInit} from '@angular/core';
import {ItemProps} from './types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() itemProps: ItemProps;

  constructor() {
  }

  ngOnInit(): void {
  }

}
