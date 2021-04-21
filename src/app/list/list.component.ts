import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from './Item';
import { TodoDataService } from '../todo-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items =  [] as Item[]

  action = this.route.snapshot.paramMap.get('action')
  listId = this.route.snapshot.paramMap.get('id')

  todoDataServiceSubscription: Subscription;

  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService) { 
    this.todoDataServiceSubscription = this.todoDataService.execChange.subscribe((value) => {
      this.items =  value; 
    });
    this.items = todoDataService.getItems()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.listId = params['id'];
    });
  }

  markItemDone(item: Item){
    this.todoDataService.markItemDone(item)
  }
  
  removeItem(item: Item){
    this.todoDataService.removeItem(item)
  }

}
