import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetListDocument, GetListGQL, GetListQuery, PatchTodoGQL, DeleteTodoGQL, AddListGQL } from 'src/components';
import { Item } from './Item';
import { map } from 'rxjs/operators';
import Observable from 'zen-observable';

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

  items = [] as GetListQuery["lists_by_pk"]["todos"]
  name = ""
  routerSub: Subscription
  data$: any

  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(params => {
      this.action = params['action'];
      this.listId = params['id'];
    });

    this.data$ = this.getListQuery.watch({slug: this.listId}).valueChanges.pipe(map(items => {
      return {
        items: items.data.lists_by_pk.todos,
        name: items.data.lists_by_pk.name
      }
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
