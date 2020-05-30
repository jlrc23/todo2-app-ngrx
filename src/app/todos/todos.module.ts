import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [TodoAddComponent, FooterComponent, ItemComponent, TodoListComponent, TodoPageComponent, FiltroPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
    
  ],
  exports:[
    TodoPageComponent
  ]
})
export class TodosModule { }
