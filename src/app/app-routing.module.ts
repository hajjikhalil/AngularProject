import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : 'test',component : NavComponent },
  {path :'y',component : FooterComponent},
  {path : 'form', component : TemplateDrivenFormComponent},
  {path : 'todo', component : TodoListComponent},
  {path : 'users', component : UsersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
