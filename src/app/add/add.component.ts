import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTodoGQL, GetListDocument } from 'src/components';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm = new FormGroup({
    text: new FormControl(''),
    prio: new FormControl(''),
  })

  action = this.route.snapshot.paramMap.get('action')
  listId = this.route.snapshot.paramMap.get('id')

  constructor(private route: ActivatedRoute, private router: Router, private addTodoMutation:AddTodoGQL) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.listId = params['id'];
    });
  }

  async onSubmit(){
    const values = this.addForm.value

    await this.addTodoMutation.mutate({text:values.text, prio:Number(values.prio), listSlug: this.listId }, {refetchQueries: [{
      query: GetListDocument,
      variables: { slug: this.listId },
    }]}).toPromise()

    this.router.navigate(["list", this.listId, "view"])
  }

}
