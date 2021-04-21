import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetListDocument, GetListGQL, GetListQuery, PatchTodoGQL, DeleteTodoGQL } from 'src/components';
import { Item } from './Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  action = this.route.snapshot.paramMap.get('action')
  listId = this.route.snapshot.paramMap.get('id')

  todoDataServiceSubscription: Subscription;

  constructor(private route: ActivatedRoute, private getListQuery:GetListGQL, private patchTodoMutation:PatchTodoGQL, private deleteTodoMutation:DeleteTodoGQL) { 
    
  }

  items = [] as GetListQuery["lists_by_pk"]["todos"]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.listId = params['id'];
    });

   this.getListQuery.watch({slug:"test-test"}).valueChanges.subscribe(items => {
     if(items?.data?.lists_by_pk?.todos){
       this.items = items.data.lists_by_pk.todos
     }
  })
  }

   markItemDone(item: Item){
    return this.patchTodoMutation.mutate({id: item.id, set: {isDone: true}}, {refetchQueries: [{
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
