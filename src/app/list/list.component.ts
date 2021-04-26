import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { GetListDocument, GetListGQL, GetListQuery, PatchTodoGQL, DeleteTodoGQL, AddListGQL } from 'src/components';
import { Item } from './Item';
import { map } from 'rxjs/operators';
import { workerData } from 'node:worker_threads';

interface DataType {
  items:GetListQuery["lists_by_pk"]["todos"];
  name: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  action = this.route.snapshot.paramMap.get('action')
  listId = this.route.snapshot.paramMap.get('id')

  todoDataServiceSubscription: Subscription;

  constructor(private route: ActivatedRoute, private getListQuery:GetListGQL, private patchTodoMutation:PatchTodoGQL, private deleteTodoMutation:DeleteTodoGQL) { 
    
  }

  routerSub: Subscription
  data$: Observable<DataType>

  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(params => {
      this.action = params['action'];
      this.listId = params['id'];
    });

    this.data$ = this.getListQuery.watch({slug: this.listId}).valueChanges.pipe(map(items => {
      const data: DataType = {
        items: items.data.lists_by_pk.todos,
        name: items.data.lists_by_pk.name
      }

      return data
    }))
  }

  ngOnDestroy(){
    this.routerSub.unsubscribe()
  }

   markItemDone(item: Item){
    return this.patchTodoMutation.mutate({id: item.id, set: {isDone: !item.isDone}}, {refetchQueries: [{
      query: GetListDocument,
      variables: { slug: this.listId },
    }]}).toPromise()
  }
  
  removeItem(item: Item){
    return this.deleteTodoMutation.mutate({id: item.id}, {refetchQueries: [{
      query: GetListDocument,
      variables: { slug: this.listId },
    }]}).toPromise()
  }

}
