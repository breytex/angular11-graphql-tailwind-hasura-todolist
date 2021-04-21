import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './list/Item';

@Pipe({name: 'orderByPrio'})
export class OrderByPrio implements PipeTransform {
  transform(value: Item[]): Item[] {
    return value.sort((x,y)=> {
      if(x.isDone === y.isDone) return 0
      if(x.isDone) return 1
      return -1
    })
  }
}
 