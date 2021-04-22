import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { slugify } from './slugify';
import { AddListGQL } from 'src/components';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

   
  constructor(private router: Router , private addListMutation: AddListGQL) { }

  input = new FormControl('')

  ngOnInit(): void {
  }

  async onSubmit(){
    const name = this.input.value;
    const slug = slugify(name)
    try{
      await this.addListMutation.mutate({name,slug}).toPromise()
    }catch(e){
      console.error("List with this slug already exists")
    }
    this.router.navigate(["list", slug, "view"])
  }
}
