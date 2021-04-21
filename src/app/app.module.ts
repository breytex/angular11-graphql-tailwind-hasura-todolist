import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { OrderByPrio } from './orderByPrio.pipe';
import { MapPriority } from './mapPriority.pipe';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoDataService } from './todo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    OrderByPrio,
    MapPriority,
    CreateComponent,
  ],
  imports: [
  ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
