import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { slugify } from './slugify';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router) { }

  input = new FormControl('')

  ngOnInit(): void {
  }

  onSubmit(){
    const slug = slugify(this.input.value)
    this.router.navigate(["list", slug, "view"])
  }
}
