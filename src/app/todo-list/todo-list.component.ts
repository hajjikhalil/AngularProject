import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/model/todo';
import { CalculServiceService } from '../calcul-service.service';
import { TodoService } from '../todo.service' ;



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  pourcent! : number;
  nbr! : number;
  listTodo! : Todo[] ;
  constructor(private service : CalculServiceService , private todo : TodoService) { 

  }

  ngOnInit(): void {
    this.listTodo=[
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":
      false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officiaqui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":
      false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab",
      "completed": true}];
      this.nbr = this.service.getNumberOf(this.listTodo,"completed",true);
      console.log(this.nbr);
  }

  pourcentage() {
    this.pourcent = this.service.getNumberOf(this.listTodo,"completed",true)/this.listTodo.length*100;
alert("le pourcentage est " + this.pourcent + "%");
  }
  todolist:any;

  getTodo(){
    this.todo.gettodo().subscribe(
      (data)=>{
        this.todolist=data
      }
      );
  
    }
}
