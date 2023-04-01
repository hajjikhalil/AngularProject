import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/model/utilisateur';
import { CalculServiceService } from '../calcul-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers! : Utilisateur[];
  input:any;
message:any;
somme :any;
  constructor(private c :CalculServiceService ) { }

  ngOnInit(): void {
    this.listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:"Nathan@yesenia.net"}
      ]
  }
  getNumberOf(){
    this.somme= this.c.getNumberOf(this.listUsers,"username",this.input)
    this.message="le nombre d’utilisateurs ayant le nom "+this.input+"  "+this.somme;
   
    }
}
