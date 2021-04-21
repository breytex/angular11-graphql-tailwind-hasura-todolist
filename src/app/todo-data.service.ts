import { Injectable } from '@angular/core';
import { Item } from './list/Item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  execChange: Subject<Item[]> = new Subject<Item[]>();

  items = [
    {id: 1, text: "React hinterher trauern", prio: 0, isDone: false},
    {id: 3, text: "Angular lernen", prio: 5, isDone: true},
    {id: 2, text: "Küche putzen", prio: 10, isDone: false},
    {id: 3, text: "Katzen schmusen 🐱", prio: 0, isDone: false},
  ] as Item[];

  getItems(){
    return this.items
  }

  markItemDone(item: Item){
    this.items = this.items.map(currItem => currItem === item ? ({...currItem, isDone: true}) : currItem)
    this.execChange.next(this.items);
  }
  
  removeItem(item: Item){
    this.items = this.items.filter(curItem => curItem !== item)
    this.execChange.next(this.items);
  }
  
  addTodo(item: Item){
    this.items = [item, ...this.items]
    this.execChange.next(this.items);
  }

}
 