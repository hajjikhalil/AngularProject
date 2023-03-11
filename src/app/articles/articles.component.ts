import { Component, OnInit } from '@angular/core';
import { Article } from 'src/model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
titre = 'les articles du jour';
listeArticles: Article[] =[
  {titre:"Le championnat du monde ",contenu:"Le championnat du monde  est ",auteur:"med taher ",date:"12/12/2005" ,categorie:"sport"},
  {titre:"Les nouveaux parents",contenu:"les nouveau parent",auteur:"ahmed said ",date:"11/11/2018" ,categorie:"Education"},
  {titre:"comment ecrire votre cv ",contenu:"pour reussir a decraucher un emploi ",auteur:"marie elsa",date:"02/04/2017" ,categorie:"travail"}
]
somme : any;

  constructor() { }

  ngOnInit(): void {
  this.somme;
  }
  Somme(){
    this.somme = this.listeArticles.filter(a=>a.categorie!='travail').length;
}
}
