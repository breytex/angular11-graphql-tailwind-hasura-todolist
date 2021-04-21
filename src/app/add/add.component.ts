import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../todo-data.service';

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

  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.listId = params['id'];
    });
  }

  onSubmit(){
    const values = this.addForm.value
    this.todoDataService.addTodo({
      id: 2,
      text: values.text,
      prio: Number(values.prio),
      isDone: false,
    })
    this.router.navigate(["list", this.listId, "view"])
  }

}
