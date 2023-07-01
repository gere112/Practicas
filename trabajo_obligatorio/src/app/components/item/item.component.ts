import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  @Input () item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  
  }
  OnDelete(item:Item){

    this.deleteItem.emit(item);
  }
}
